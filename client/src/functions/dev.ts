export async function fakeComponentLoad(timeInSeconds: number) {
    return new Promise((res) => {
        setTimeout(() => {
            res("OK");
        }, timeInSeconds);
    });
}
