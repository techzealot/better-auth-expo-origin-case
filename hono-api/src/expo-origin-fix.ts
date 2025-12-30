import type { BetterAuthPlugin } from "better-auth";

/**
 * Expo Origin Fix Plugin
 * 
 * 修复 Expo 应用的 origin header 问题
 * 
 * 问题：
 * - Expo 应用发送请求时，会设置 `expo-origin` header
 * - 但 better-auth 的 origin 检查只认 `origin` header
 * - 导致 CORS 验证失败
 * 
 * 解决方案：
 * - 在请求到达 better-auth 之前，将 `expo-origin` 复制到 `origin` header
 * 
 * 使用方式：
 * ```typescript
 * import { expoOriginFix } from './plugins/expo-origin-fix';
 * 
 * export const auth = betterAuth({
 *   plugins: [
 *     expoOriginFix(),
 *     expo(),
 *     // ... 其他插件
 *   ]
 * });
 * ```
 * 
 * 注意：
 * - 必须放在 expo() 插件之前
 * - 因为返回了新的 request，会短路后续插件的 onRequest 钩子
 */
export const expoOriginFix = (): BetterAuthPlugin => {
  return {
    id: "expo-origin-fix",
    onRequest: async (request) => {
      // 检查是否有 expo-origin header
      const expoOrigin = request.headers.get("expo-origin");

      if (!expoOrigin) {
        // 没有 expo-origin，不需要处理
        return;
      }

      // 创建新的 Headers 对象（可修改）
      const newHeaders = new Headers(request.headers);
      newHeaders.set("origin", expoOrigin);

      // 创建新的 Request 对象
      const newRequest = new Request(request, {
        headers: newHeaders
      });

      return {
        request: newRequest,
      };
    },
  };
};

