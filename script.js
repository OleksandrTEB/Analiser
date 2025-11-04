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
    length_word.textContent = words.length

    length_zdan.textContent = countZdan(value)

    max_length.textContent = maxLengthWord(words)



    center_lens.textContent = Math.floor(all_length_words / count_words);

    let arr_all_upperant_letter = value.match(/[A-Z]/g)
}

function countCharset(text) {
    return text.length
}

function countWord(text) {
    return text.split(" ")
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

function centerWordCharset() {
    let all_length_words = 0
    let count_words = words.length

    words.forEach(word => {
        all_length_words += word.length
    })
}