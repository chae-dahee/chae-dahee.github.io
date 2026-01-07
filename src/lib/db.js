import mysql from "mysql2/promise";

let pool;

/**
 * MySQL 연결 풀 생성 및 반환
 * 싱글톤 패턴으로 구현하여 중복 연결 방지
 */
export async function getDb() {
  if (!pool) {
    pool = mysql.createPool({
      uri: process.env.DATABASE_URL,
      waitForConnections: true,
      connectionLimit: 10,
      queueLimit: 0,
      enableKeepAlive: true,
      keepAliveInitialDelay: 0,
    });
  }
  return pool;
}

/**
 * 쿼리 실행 헬퍼 함수
 * query() 메서드 사용 (execute()보다 파라미터 바인딩이 안정적)
 * @param {string} query - SQL 쿼리문
 * @param {Array} params - 쿼리 파라미터
 * @returns {Promise} 쿼리 결과
 */
export async function executeQuery(query, params = []) {
  try {
    const db = await getDb();
    const [results] = await db.query(query, params);
    return results;
  } catch (error) {
    console.error("Database query error:", error);
    console.error("Query:", query);
    console.error("Params:", params);
    throw error;
  }
}

/**
 * 데이터베이스 연결 테스트
 */
export async function testConnection() {
  try {
    const db = await getDb();
    const connection = await db.getConnection();
    console.log("✅ Database connected successfully");
    connection.release();
    return true;
  } catch (error) {
    console.error("❌ Database connection failed:", error);
    return false;
  }
}
