import { motion } from "framer-motion";

export default function Learned() {
  return (
    <section className="w-full py-20 px-4 bg-neutral-50 dark:bg-neutral-900 transition-colors duration-300">
      <div className="max-w-4xl mx-auto">
        <motion.div
          className="bg-white dark:bg-neutral-800 rounded-3xl p-8 md:p-12 shadow-xl border border-neutral-200 dark:border-neutral-700"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          {/* 제목 */}
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-center mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span className="text-primary-500">💪 Lesson Learned</span>
          </motion.h2>

          <motion.p
            className="text-xl md:text-2xl font-semibold text-center text-neutral-900 dark:text-neutral-50 mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            섬세하고 적극적인 서포터
          </motion.p>

          {/* 내용 */}
          <motion.div
            className="space-y-4 text-neutral-700 dark:text-neutral-300 text-base md:text-lg leading-relaxed text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <p>
              이전에는 문제 해결에만 집착하는 사람이었다면, 여러 경험을 통해{" "}
              <span className="font-semibold text-primary-600 dark:text-primary-400">
                근본적인 부분부터 고민
              </span>
              을 시작하는 방법을 배웠습니다.
            </p>
            <p>
              단순하게가 아닌,{" "}
              <span className="font-semibold text-primary-600 dark:text-primary-400">
                깊이있게 생각해 설계와 로직을 먼저 고려
              </span>
              하는 개발자가 되었습니다.
            </p>
            <p>협업 과정에서도 넓게 이해할 수 있게 되었습니다.</p>
            <p>
              각 담당자에게 무엇을 요청하고, 어떤 코드를 중점적으로 피드백해야
              할지 이해하게 되었습니다.
            </p>
            <p>
              어느 곳에서나 적응하고{" "}
              <span className="font-semibold text-primary-600 dark:text-primary-400">
                섬세하게 소통
              </span>
              하여 프로젝트의 효율을 이루어 내었습니다.
            </p>
            <p className="font-bold text-neutral-900 dark:text-neutral-100 mt-6 text-xl">
              환경을 리드하는 사람으로 주도적으로 협업하겠습니다.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
