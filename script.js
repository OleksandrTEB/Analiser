const input = document.querySelector('textarea')
const length_charset = document.querySelector('.span1')
const length_charset_out_space = document.querySelector('.span222')
const length_word = document.querySelector('.span2')
const length_zdan = document.querySelector('.span3')
const max_length = document.querySelector('.span4')
const center_lens = document.querySelector('.span5')
const procent = document.querySelector('.span6')

function analize() {
    const value = input.value

    length_charset.textContent = countCharset(value)
    length_charset_out_space.textContent = String(countCharsetOutSpace(value))

    const words = countWord(value).words
    length_word.textContent = String(countWord(value).counterWord)

    length_zdan.textContent = countZdan(value)

    max_length.textContent = maxLengthWord(words)

    center_lens.textContent = centerWordCharset(words);

    procent.textContent = `${countUpperantLetters(value)}%`
}

function countCharset(text) {
    return text.length
}

function countCharsetOutSpace(text) {
    let charsetCounter = 0

    for (let i = 0; i < text.length; i++) {
        if (text.charAt(i) !== " ") {
            charsetCounter++
        }
    }
    return charsetCounter
}

function countWord(text) {
    let words = text.split(" ")

    let newArrWords = []

    let counterWord = 0;

    words.forEach(word => {
        if (word !== '') {
            word.trim()
            counterWord++
        }
    })

    for (let i = 0; i < words.length; i++) {
        if (words[i] !== "") {
            newArrWords.push(words[i])
        }
    }

    return {
        words: newArrWords,
        counterWord: counterWord
    }
}

function countZdan(text) {
    return text.split(".").length
}

function maxLengthWord(words) {
    let max_length_word = 0;
    let word_ = ''

    words.forEach(word => {
        if (word.length > max_length_word) {
            max_length_word = word.length

            word_ = word
        }
    })

    return word_
}

function centerWordCharset(words) {
    let all_length_words = 0
    let count_words = words.length

    words.forEach(word => {
        all_length_words += word.length
    })

    return String(Math.floor(all_length_words / count_words));
}

function countUpperantLetters(text) {
    let counter_low_letters = 0, counter_upperant_letters = 0

    const words = countWord(text).words

    words.forEach(word => {
        for (let i = 0; i < word.length; i++) {
            if (/[A-Z]/.test(word.charAt(i))) {
                counter_upperant_letters ++
            } else {
                counter_low_letters++
            }
        }
    })

    let sum = counter_low_letters + counter_upperant_letters


    return Math.floor((counter_upperant_letters * 100) / sum)
}