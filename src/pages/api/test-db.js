import { testConnection } from "@/lib/db";

/**
 * 데이터베이스 연결 테스트 API
 * GET /api/test-db
 */
export default async function handler(req, res) {
  if (req.method !== "GET") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const isConnected = await testConnection();

    if (isConnected) {
      return res.status(200).json({
        success: true,
        message: "Database connection successful",
        timestamp: new Date().toISOString(),
      });
    } else {
      return res.status(500).json({
        success: false,
        message: "Database connection failed",
      });
    }
  } catch (error) {
    console.error("Test DB error:", error);
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
}
