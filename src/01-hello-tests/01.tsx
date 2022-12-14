const sentense = 'Hello my friends!';

export function sum(a: number, b: number) {
    return a + b;
}

export function mult(a: number, b: number) {
    return a * b;
}

export function splitInToWords(sentense: string) {
    const words = sentense.toLowerCase().split(' ')

    return words.filter(w => w.length > 0 && w !== '-')
        .map(w => w
            .replace('-', '')
            .replace('.', '')
            .replace('!', ''));
}