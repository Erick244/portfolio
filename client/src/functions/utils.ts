export async function sleep(timeInSeconds: number) {
    return new Promise((res) => {
        setTimeout(() => {
            res("OK");
        }, timeInSeconds);
    });
}
