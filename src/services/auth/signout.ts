import { ApiContext } from "types";
import { fetcher } from "utils";

/**
 * 認証API（サインアウト）
 * @params context APIコンテキスト
 * @returns サウンアウトメッセージ
 */
const signout = async (context: ApiContext): Promise<{ message: string }> => {
  return await fetcher(
    `${context.apiRootUrl.replace(/\/$/g, "")}/auth/signout`,
    {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    },
  );
};

export default signout;
