import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { BookOpen, Database, Sparkles, Zap } from "lucide-react"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse animation-delay-4000"></div>
      </div>

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%239C92AC' fillOpacity='0.05'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      ></div>

      <div className="relative z-10 flex items-center justify-center min-h-screen p-3 sm:p-4">
        <div className="max-w-6xl w-full">
          {/* Header */}
          <div className="text-center mb-8 sm:mb-16 px-2">
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-white via-purple-200 to-blue-200 bg-clip-text text-transparent mb-4 sm:mb-6 leading-tight">
              Система
              <br />
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
                Тестирования
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
              Тестирование знаний по алгоритмам и базам данных
            </p>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 px-2">
            {/* Algorithms Card */}
            <div className="group relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>

              <Card className="relative bg-slate-800/50 backdrop-blur-xl border-slate-700/50 hover:border-purple-500/50 transition-all duration-500 group-hover:scale-[1.02] overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-blue-500/5"></div>

                <CardHeader className="text-center pb-4 relative z-10">
                  <div className="mx-auto w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-purple-500 to-blue-600 rounded-2xl flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-purple-500/25">
                    <BookOpen className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
                  </div>

                  <CardTitle className="text-2xl sm:text-3xl font-bold text-white mb-2">Алгоритмы</CardTitle>

                  <CardDescription className="text-base sm:text-lg text-gray-300">
                    Тест по алгоритмам и программированию
                  </CardDescription>
                </CardHeader>

                <CardContent className="text-center pt-0 relative z-10">
                  <div className="flex items-center justify-center gap-2 mb-6 text-sm text-gray-400">
                    <Zap className="w-4 h-4 text-yellow-400" />
                    <span>30 случайных вопросов</span>
                  </div>

                  <Link href="/algorithm-test">
                    <Button
                      size="lg"
                      className="w-full h-14 text-base font-semibold bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 border-0 rounded-xl shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40 transition-all duration-300 group-hover:scale-105"
                    >
                      <span className="flex items-center gap-2">
                        Начать тест
                        <Sparkles className="w-4 h-4" />
                      </span>
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </div>

            {/* Database Card */}
            <div className="group relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-green-600 to-teal-600 rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>

              <Card className="relative bg-slate-800/50 backdrop-blur-xl border-slate-700/50 hover:border-green-500/50 transition-all duration-500 group-hover:scale-[1.02] overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-teal-500/5"></div>

                <CardHeader className="text-center pb-4 relative z-10">
                  <div className="mx-auto w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-green-500 to-teal-600 rounded-2xl flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-green-500/25">
                    <Database className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
                  </div>

                  <CardTitle className="text-2xl sm:text-3xl font-bold text-white mb-2">Базы данных</CardTitle>

                  <CardDescription className="text-base sm:text-lg text-gray-300">Тест по базам данных</CardDescription>
                </CardHeader>

                <CardContent className="text-center pt-0 relative z-10">
                  <div className="flex items-center justify-center gap-2 mb-6 text-sm text-gray-400">
                    <Zap className="w-4 h-4 text-yellow-400" />
                    <span>20 вопросов с множественным выбором</span>
                  </div>

                  <Link href="/database-test">
                    <Button
                      size="lg"
                      className="w-full h-14 text-base font-semibold bg-gradient-to-r from-green-600 to-teal-600 hover:from-green-700 hover:to-teal-700 border-0 rounded-xl shadow-lg shadow-green-500/25 hover:shadow-green-500/40 transition-all duration-300 group-hover:scale-105"
                    >
                      <span className="flex items-center gap-2">
                        Начать тест
                        <Sparkles className="w-4 h-4" />
                      </span>
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
