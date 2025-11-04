const input = document.querySelector('textarea')
const length_charset = document.querySelector('.span1')
const length_word = document.querySelector('.span2')
const length_zdan = document.querySelector('.span3')
const max_length = document.querySelector('.span4')
const center_lens = document.querySelector('.span5')
const pocent = document.querySelector('.span6')

function analize() {
    const value = input.value.trim()

    length_charset.textContent = countCharset(value)

    const words = countWord(value)
    length_word.textContent = String(words.length)

    length_zdan.textContent = countZdan(value)

    max_length.textContent = maxLengthWord(words)

    center_lens.textContent = centerWordCharset(words);

    countUpperantLetters(value)
}

function countCharset(text) {
    return text.length
}

function countWord(text) {
    let words = text.split(" ")

    words.forEach(word => {
        word.trim()
    })

    return words
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
    let arr_low_letters = [], arr_upperant_letters = [], procent = 0;

    const words = countWord(text)

    words.forEach(word => {
        word.forEach(char => {
            console.log(char)
        })
    })
}