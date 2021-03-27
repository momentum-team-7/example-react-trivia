import axios from 'axios'
import { categoryData } from './categories.js'
import { data } from './questions.js'

export const getCategoryList = () => {
  const categoryListUrl = 'https://opentdb.com/api_category.php?amount=10'
  // return axios.get(categoryListUrl).then((data) => data.data.trivia_categories)
  return categoryData
}

export const getQuestionSet = (category) => {
  // const questionUrl = `https://opentdb.com/api.php?amount=10&type=multiple&category=${category.id}`
  // return axios.get(questionUrl).then((data) => data.data.results)
  return data
}
