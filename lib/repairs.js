export async function getRepairs() {
    return (
        await fetch('https://api.quotable.io/quotes')
    ).json();
}