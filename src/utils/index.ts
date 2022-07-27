export const fetcher = async (
	resource: RequestInfo,
	init: RequestInfo
): Promise<any> => {
	const res = await fetch(resource, init);
	const json = await res.json();

	if (!res.ok) {
		const error = new Error(
			json.message ?? "APIリクエスト中にエラーが発生しました"
		);

		throw error;
	}

	return json;
};
