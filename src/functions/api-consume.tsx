async function get<R>(path: string): Promise<R> {
    try {
        const response = await fetch(path, { method: "GET" });
        const data = await response.json();
        return data;
    } catch (error) {
        throw error as Error;
    }
}

export const ApiConsume = {
    get,
};
