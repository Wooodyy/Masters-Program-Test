"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Progress } from "@/components/ui/progress"
import {
  XCircle,
  RotateCcw,
  Home,
  AlertCircle,
  ChevronLeft,
  ChevronRight,
  Clock,
  Target,
  Award,
  TrendingUp,
} from "lucide-react"
import Link from "next/link"
import quizDataAlgorithm from "@/data/quizDataAlgorithm"

interface Answer {
  text: string
  isCorrect: boolean
}

interface Question {
  question: string
  answers: Answer[]
  originalAnswers: Answer[]
}

interface WrongAnswer {
  question: string
  selectedAnswer: string
  correctAnswer: string
  allAnswers: Answer[]
}

export default function AlgorithmTest() {
  const [questions, setQuestions] = useState<Question[]>([])
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState("")
  const [userAnswers, setUserAnswers] = useState<string[]>([])
  const [showResults, setShowResults] = useState(false)
  const [score, setScore] = useState(0)
  const [wrongAnswers, setWrongAnswers] = useState<WrongAnswer[]>([])

  const shuffleArray = <T,>(array: T[]): T[] => {
    const shuffled = [...array]
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1))
      ;[shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
    }
    return shuffled
  }

  useEffect(() => {
    const shuffled = [...quizDataAlgorithm].sort(() => 0.5 - Math.random())
    const selected = shuffled.slice(0, 30)

    const questionsWithShuffledAnswers = selected.map((q) => ({
      question: q.question,
      originalAnswers: [...q.answers],
      answers: shuffleArray(q.answers),
    }))

    setQuestions(questionsWithShuffledAnswers)
    setUserAnswers(new Array(30).fill(""))
  }, [])

  const handleAnswerSelect = (answerText: string) => {
    setSelectedAnswer(answerText)
    const newAnswers = [...userAnswers]
    newAnswers[currentQuestion] = answerText
    setUserAnswers(newAnswers)
  }

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
      setSelectedAnswer(userAnswers[currentQuestion + 1] || "")
    }
  }

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1)
      setSelectedAnswer(userAnswers[currentQuestion - 1] || "")
    }
  }

  const handleFinish = () => {
    let correctAnswers = 0
    const wrongAnswersList: WrongAnswer[] = []

    questions.forEach((question, index) => {
      const correctAnswer = question.originalAnswers.find((answer) => answer.isCorrect)
      const userAnswer = userAnswers[index]

      if (correctAnswer && userAnswer === correctAnswer.text) {
        correctAnswers++
      } else if (userAnswer && correctAnswer) {
        wrongAnswersList.push({
          question: question.question,
          selectedAnswer: userAnswer,
          correctAnswer: correctAnswer.text,
          allAnswers: question.originalAnswers,
        })
      }
    })

    setScore(correctAnswers)
    setWrongAnswers(wrongAnswersList)
    setShowResults(true)
  }

  const resetTest = () => {
    const shuffled = [...quizDataAlgorithm].sort(() => 0.5 - Math.random())
    const selected = shuffled.slice(0, 30)

    const questionsWithShuffledAnswers = selected.map((q) => ({
      question: q.question,
      originalAnswers: [...q.answers],
      answers: shuffleArray(q.answers),
    }))

    setQuestions(questionsWithShuffledAnswers)
    setCurrentQuestion(0)
    setSelectedAnswer("")
    setUserAnswers(new Array(30).fill(""))
    setShowResults(false)
    setScore(0)
    setWrongAnswers([])
  }

  if (questions.length === 0) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center p-4">
        <div className="text-center">
          <div className="relative">
            <div className="animate-spin rounded-full h-16 w-16 border-4 border-purple-500/30 border-t-purple-500 mx-auto mb-6"></div>
            <div className="absolute inset-0 rounded-full h-16 w-16 border-4 border-blue-500/20 border-t-blue-500 mx-auto animate-spin animation-delay-150"></div>
          </div>
          <p className="text-lg text-gray-300 font-medium">Подготовка вопросов...</p>
          <p className="text-sm text-gray-500 mt-2">Создаем идеальный тест для вас</p>
        </div>
      </div>
    )
  }

  if (showResults) {
    const percentage = Math.round((score / questions.length) * 100)
    const passed = percentage >= 70

    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
        {/* Background effects */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
        </div>

        <div className="relative z-10 p-3 sm:p-4">
          <div className="max-w-4xl mx-auto">
            {/* Results Card */}
            <div className="relative group mt-4 sm:mt-8">
              <div
                className={`absolute -inset-1 rounded-2xl blur opacity-25 ${passed ? "bg-gradient-to-r from-green-600 to-emerald-600" : "bg-gradient-to-r from-red-600 to-pink-600"}`}
              ></div>

              <Card className="relative bg-slate-800/50 backdrop-blur-xl border-slate-700/50 overflow-hidden">
                <div
                  className={`absolute inset-0 ${passed ? "bg-gradient-to-br from-green-500/5 to-emerald-500/5" : "bg-gradient-to-br from-red-500/5 to-pink-500/5"}`}
                ></div>

                <CardHeader className="text-center pb-6 relative z-10">
                  <div
                    className={`mx-auto w-20 h-20 sm:w-24 sm:h-24 rounded-full flex items-center justify-center mb-6 shadow-2xl ${
                      passed
                        ? "bg-gradient-to-br from-green-500 to-emerald-600 shadow-green-500/25"
                        : "bg-gradient-to-br from-red-500 to-pink-600 shadow-red-500/25"
                    }`}
                  >
                    {passed ? (
                      <Award className="w-10 h-10 sm:w-12 sm:h-12 text-white" />
                    ) : (
                      <XCircle className="w-10 h-10 sm:w-12 sm:h-12 text-white" />
                    )}
                  </div>

                  <CardTitle className="text-3xl sm:text-4xl font-bold text-white mb-4">
                    {passed ? "🎉 Поздравляем!" : "😔 Попробуйте еще раз"}
                  </CardTitle>
                </CardHeader>

                <CardContent className="text-center space-y-6 relative z-10">
                  {/* Stats Grid */}
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-8">
                    <div className="bg-slate-700/50 rounded-xl p-4 backdrop-blur-sm">
                      <Target className="w-6 h-6 text-blue-400 mx-auto mb-2" />
                      <p className="text-2xl font-bold text-white">{score}</p>
                      <p className="text-sm text-gray-400">Правильно</p>
                    </div>

                    <div className="bg-slate-700/50 rounded-xl p-4 backdrop-blur-sm">
                      <TrendingUp className="w-6 h-6 text-purple-400 mx-auto mb-2" />
                      <p className="text-2xl font-bold text-white">{percentage}%</p>
                      <p className="text-sm text-gray-400">Процент</p>
                    </div>

                    <div className="bg-slate-700/50 rounded-xl p-4 backdrop-blur-sm col-span-2 sm:col-span-1">
                      <Clock className="w-6 h-6 text-green-400 mx-auto mb-2" />
                      <p className="text-2xl font-bold text-white">{questions.length}</p>
                      <p className="text-sm text-gray-400">Вопросов</p>
                    </div>
                  </div>

                  <div className={`text-xl font-semibold ${passed ? "text-green-400" : "text-red-400"}`}>
                    {passed ? "Тест пройден успешно!" : "Тест не пройден"}
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button
                      onClick={resetTest}
                      variant="outline"
                      className="h-12 px-6 bg-slate-700/50 border-slate-600 hover:bg-slate-600/50 text-white backdrop-blur-sm"
                    >
                      <RotateCcw className="w-4 h-4 mr-2" />
                      Пройти заново
                    </Button>

                    <Link href="/">
                      <Button className="w-full sm:w-auto h-12 px-6 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 border-0">
                        <Home className="w-4 h-4 mr-2" />
                        На главную
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Wrong Answers */}
            {wrongAnswers.length > 0 && (
              <div className="mt-8">
                <div className="relative group">
                  <div className="absolute -inset-1 bg-gradient-to-r from-red-600 to-pink-600 rounded-2xl blur opacity-25"></div>

                  <Card className="relative bg-slate-800/50 backdrop-blur-xl border-slate-700/50">
                    <CardHeader className="pb-4">
                      <CardTitle className="flex items-center gap-3 text-red-400 text-xl sm:text-2xl">
                        <AlertCircle className="w-6 h-6" />
                        Разбор ошибок ({wrongAnswers.length})
                      </CardTitle>
                    </CardHeader>

                    <CardContent className="space-y-6">
                      {wrongAnswers.map((wrongAnswer, index) => (
                        <div
                          key={index}
                          className="bg-slate-700/30 rounded-xl p-4 sm:p-6 backdrop-blur-sm border border-slate-600/50"
                        >
                          <h3 className="font-semibold mb-4 text-white text-sm sm:text-base leading-relaxed">
                            <span className="inline-flex items-center justify-center w-6 h-6 bg-red-500 text-white text-xs rounded-full mr-3">
                              {index + 1}
                            </span>
                            {wrongAnswer.question}
                          </h3>

                          <div className="space-y-3">
                            {wrongAnswer.allAnswers.map((answer, answerIndex) => {
                              let bgColor = "bg-slate-600/30"
                              let textColor = "text-gray-300"
                              let borderColor = "border-slate-500/50"

                              if (answer.text === wrongAnswer.selectedAnswer && !answer.isCorrect) {
                                bgColor = "bg-red-500/20"
                                textColor = "text-red-300"
                                borderColor = "border-red-500/50"
                              } else if (answer.isCorrect) {
                                bgColor = "bg-green-500/20"
                                textColor = "text-green-300"
                                borderColor = "border-green-500/50"
                              }

                              return (
                                <div
                                  key={answerIndex}
                                  className={`p-4 rounded-lg border ${bgColor} ${borderColor} backdrop-blur-sm`}
                                >
                                  <span className={`${textColor} text-sm leading-relaxed block`}>
                                    {answer.text}
                                    {answer.text === wrongAnswer.selectedAnswer && !answer.isCorrect && (
                                      <span className="block sm:inline sm:ml-2 text-red-400 font-semibold text-xs mt-2 sm:mt-0">
                                        ❌ Ваш ответ
                                      </span>
                                    )}
                                    {answer.isCorrect && (
                                      <span className="block sm:inline sm:ml-2 text-green-400 font-semibold text-xs mt-2 sm:mt-0">
                                        ✅ Правильный ответ
                                      </span>
                                    )}
                                  </span>
                                </div>
                              )
                            })}
                          </div>
                        </div>
                      ))}
                    </CardContent>
                  </Card>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    )
  }

  const currentQ = questions[currentQuestion]
  const progress = ((currentQuestion + 1) / questions.length) * 100

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
      </div>

      <div className="relative z-10 p-3 sm:p-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="mb-6 sm:mb-8">
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-4 gap-3">
              <h1 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
                Тест по алгоритмам
              </h1>

              <div className="flex items-center gap-4">
                <span className="text-lg font-semibold text-purple-300">
                  {currentQuestion + 1} / {questions.length}
                </span>
              </div>
            </div>

            <div className="relative">
              <Progress value={progress} className="h-3 bg-slate-700/50 backdrop-blur-sm" />
              <div
                className="absolute top-0 left-0 h-3 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full transition-all duration-500 shadow-lg shadow-purple-500/25"
                style={{ width: `${progress}%` }}
              ></div>
            </div>
          </div>

          {/* Question Card */}
          <div className="relative group mb-6">
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-300"></div>

            <Card className="relative bg-slate-800/50 backdrop-blur-xl border-slate-700/50 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-blue-500/5"></div>

              <CardHeader className="pb-4 relative z-10">
                <CardTitle className="text-lg sm:text-xl leading-relaxed text-white font-medium">
                  {currentQ.question}
                </CardTitle>
              </CardHeader>

              <CardContent className="space-y-4 relative z-10">
                <RadioGroup value={selectedAnswer} onValueChange={handleAnswerSelect} className="space-y-3">
                  {currentQ.answers.map((answer, index) => (
                    <div
                      key={index}
                      className={`group/answer relative overflow-hidden rounded-xl border transition-all duration-300 ${
                        selectedAnswer === answer.text
                          ? "bg-gradient-to-r from-purple-500/20 to-blue-500/20 border-purple-500/50 shadow-lg shadow-purple-500/25"
                          : "bg-slate-700/30 border-slate-600/50 hover:bg-slate-600/40 hover:border-slate-500/70"
                      }`}
                    >
                      <div className="flex items-start space-x-4 p-4 sm:p-5">
                        <RadioGroupItem
                          value={answer.text}
                          id={`answer-${index}`}
                          className="mt-1 border-2 border-slate-500 text-purple-400"
                        />
                        <Label
                          htmlFor={`answer-${index}`}
                          className="flex-1 cursor-pointer text-sm sm:text-base leading-relaxed text-gray-200 group-hover/answer:text-white transition-colors"
                        >
                          {answer.text}
                        </Label>
                      </div>
                    </div>
                  ))}
                </RadioGroup>
              </CardContent>
            </Card>
          </div>

          {/* Navigation */}
          <div className="flex justify-between items-center mb-6">
            <Button
              onClick={handlePrevious}
              disabled={currentQuestion === 0}
              variant="outline"
              className="h-12 px-6 bg-slate-700/50 border-slate-600 hover:bg-slate-600/50 text-white backdrop-blur-sm disabled:opacity-50"
            >
              <ChevronLeft className="w-4 h-4 mr-2" />
              Назад
            </Button>

            <div className="flex gap-3">
              {currentQuestion === questions.length - 1 ? (
                <Button
                  onClick={handleFinish}
                  disabled={!selectedAnswer}
                  className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 h-12 px-6 font-semibold shadow-lg shadow-green-500/25 disabled:opacity-50"
                >
                  Завершить тест
                </Button>
              ) : (
                <Button
                  onClick={handleNext}
                  disabled={!selectedAnswer}
                  className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 h-12 px-6 font-semibold shadow-lg shadow-purple-500/25 disabled:opacity-50"
                >
                  Далее
                  <ChevronRight className="w-4 h-4 ml-2" />
                </Button>
              )}
            </div>
          </div>

          {/* Home Link */}
          <div className="text-center">
            <Link href="/">
              <Button
                variant="outline"
                className="h-12 px-6 bg-slate-700/50 border-slate-600 hover:bg-slate-600/50 text-white backdrop-blur-sm"
              >
                <Home className="w-4 h-4 mr-2" />
                На главную
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
