"use client"

import { useState } from "react"
import { Brain, TrendingUp, Activity, Target, AlertCircle, CheckCircle2, Trophy, Calendar, Users, BarChart3 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"

interface Prediction {
  id: string
  match: string
  league: string
  date: string
  teams: { home: string; away: string }
  prediction: string
  confidence: number
  odds: number
  factors: {
    formHome: number
    formAway: number
    headToHead: number
    injuries: number
    homeAdvantage: number
  }
  stats: {
    homeWins: number
    awayWins: number
    draws: number
    goalsAvg: number
  }
}

export default function Home() {
  const [sport, setSport] = useState("football")
  const [league, setLeague] = useState("premier-league")
  const [analyzing, setAnalyzing] = useState(false)
  const [predictions, setPredictions] = useState<Prediction[]>([])

  const generatePredictions = () => {
    setAnalyzing(true)
    
    setTimeout(() => {
      const mockPredictions: Prediction[] = [
        {
          id: "1",
          match: "Manchester City vs Arsenal",
          league: "Premier League",
          date: "2024-01-20",
          teams: { home: "Manchester City", away: "Arsenal" },
          prediction: "Vitória Manchester City",
          confidence: 78,
          odds: 1.85,
          factors: {
            formHome: 92,
            formAway: 85,
            headToHead: 65,
            injuries: 88,
            homeAdvantage: 75
          },
          stats: {
            homeWins: 12,
            awayWins: 8,
            draws: 5,
            goalsAvg: 2.8
          }
        },
        {
          id: "2",
          match: "Liverpool vs Chelsea",
          league: "Premier League",
          date: "2024-01-20",
          teams: { home: "Liverpool", away: "Chelsea" },
          prediction: "Mais de 2.5 Golos",
          confidence: 82,
          odds: 1.72,
          factors: {
            formHome: 88,
            formAway: 72,
            headToHead: 78,
            injuries: 80,
            homeAdvantage: 82
          },
          stats: {
            homeWins: 15,
            awayWins: 6,
            draws: 4,
            goalsAvg: 3.2
          }
        },
        {
          id: "3",
          match: "Real Madrid vs Barcelona",
          league: "La Liga",
          date: "2024-01-21",
          teams: { home: "Real Madrid", away: "Barcelona" },
          prediction: "Ambas Equipas Marcam",
          confidence: 85,
          odds: 1.65,
          factors: {
            formHome: 90,
            formAway: 87,
            headToHead: 82,
            injuries: 85,
            homeAdvantage: 70
          },
          stats: {
            homeWins: 14,
            awayWins: 10,
            draws: 6,
            goalsAvg: 3.5
          }
        }
      ]
      
      setPredictions(mockPredictions)
      setAnalyzing(false)
    }, 2000)
  }

  const getConfidenceColor = (confidence: number) => {
    if (confidence >= 80) return "text-green-600"
    if (confidence >= 70) return "text-yellow-600"
    return "text-orange-600"
  }

  const getConfidenceBadge = (confidence: number) => {
    if (confidence >= 80) return "bg-green-500"
    if (confidence >= 70) return "bg-yellow-500"
    return "bg-orange-500"
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-slate-950">
      {/* Header */}
      <div className="border-b border-white/10 bg-black/20 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center gap-3">
            <div className="p-3 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl">
              <Brain className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-white">Sports AI Predictor</h1>
              <p className="text-blue-200 text-sm">Previsões Inteligentes com IA Avançada</p>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <Card className="bg-gradient-to-br from-blue-500/10 to-blue-600/10 border-blue-500/20">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-blue-200">Taxa de Acerto</p>
                  <p className="text-3xl font-bold text-white">78.5%</p>
                </div>
                <Target className="w-10 h-10 text-blue-400" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-green-500/10 to-green-600/10 border-green-500/20">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-green-200">Previsões Hoje</p>
                  <p className="text-3xl font-bold text-white">24</p>
                </div>
                <Activity className="w-10 h-10 text-green-400" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-purple-500/10 to-purple-600/10 border-purple-500/20">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-purple-200">ROI Médio</p>
                  <p className="text-3xl font-bold text-white">+12.3%</p>
                </div>
                <TrendingUp className="w-10 h-10 text-purple-400" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-orange-500/10 to-orange-600/10 border-orange-500/20">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-orange-200">Vitórias Seguidas</p>
                  <p className="text-3xl font-bold text-white">7</p>
                </div>
                <Trophy className="w-10 h-10 text-orange-400" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Filters */}
        <Card className="mb-8 bg-white/5 border-white/10 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-white">Configurar Análise</CardTitle>
            <CardDescription className="text-gray-300">
              Selecione o desporto e liga para gerar previsões
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="text-sm text-gray-300 mb-2 block">Desporto</label>
                <Select value={sport} onValueChange={setSport}>
                  <SelectTrigger className="bg-white/10 border-white/20 text-white">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="football">⚽ Futebol</SelectItem>
                    <SelectItem value="basketball">🏀 Basquetebol</SelectItem>
                    <SelectItem value="tennis">🎾 Ténis</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="text-sm text-gray-300 mb-2 block">Liga</label>
                <Select value={league} onValueChange={setLeague}>
                  <SelectTrigger className="bg-white/10 border-white/20 text-white">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="premier-league">Premier League</SelectItem>
                    <SelectItem value="la-liga">La Liga</SelectItem>
                    <SelectItem value="serie-a">Serie A</SelectItem>
                    <SelectItem value="bundesliga">Bundesliga</SelectItem>
                    <SelectItem value="ligue-1">Ligue 1</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="flex items-end">
                <Button 
                  onClick={generatePredictions}
                  disabled={analyzing}
                  className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white"
                >
                  {analyzing ? (
                    <>
                      <Activity className="w-4 h-4 mr-2 animate-spin" />
                      Analisando...
                    </>
                  ) : (
                    <>
                      <Brain className="w-4 h-4 mr-2" />
                      Gerar Previsões
                    </>
                  )}
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Predictions */}
        {predictions.length > 0 && (
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-6 h-6 text-green-400" />
              <h2 className="text-2xl font-bold text-white">Previsões Geradas</h2>
            </div>

            {predictions.map((pred) => (
              <Card key={pred.id} className="bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <Badge variant="outline" className="border-blue-400 text-blue-400">
                          {pred.league}
                        </Badge>
                        <Badge variant="outline" className="border-gray-400 text-gray-300">
                          <Calendar className="w-3 h-3 mr-1" />
                          {new Date(pred.date).toLocaleDateString('pt-PT')}
                        </Badge>
                      </div>
                      <CardTitle className="text-2xl text-white mb-1">{pred.match}</CardTitle>
                      <CardDescription className="text-gray-300">
                        {pred.teams.home} vs {pred.teams.away}
                      </CardDescription>
                    </div>
                    <div className="text-right">
                      <div className={`text-3xl font-bold ${getConfidenceColor(pred.confidence)}`}>
                        {pred.confidence}%
                      </div>
                      <p className="text-sm text-gray-400">Confiança</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  {/* Prediction */}
                  <div className="mb-6 p-4 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-lg border border-blue-400/30">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm text-gray-300 mb-1">Previsão da IA</p>
                        <p className="text-xl font-bold text-white">{pred.prediction}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-sm text-gray-300 mb-1">Odd</p>
                        <p className="text-2xl font-bold text-green-400">{pred.odds.toFixed(2)}</p>
                      </div>
                    </div>
                  </div>

                  {/* Factors Analysis */}
                  <div className="mb-6">
                    <div className="flex items-center gap-2 mb-4">
                      <BarChart3 className="w-5 h-5 text-blue-400" />
                      <h3 className="font-semibold text-white">Análise de Fatores</h3>
                    </div>
                    <div className="space-y-3">
                      {Object.entries(pred.factors).map(([key, value]) => (
                        <div key={key}>
                          <div className="flex justify-between text-sm mb-1">
                            <span className="text-gray-300 capitalize">
                              {key === 'formHome' ? 'Forma Casa' :
                               key === 'formAway' ? 'Forma Fora' :
                               key === 'headToHead' ? 'Confrontos Diretos' :
                               key === 'injuries' ? 'Lesões' :
                               'Vantagem Casa'}
                            </span>
                            <span className="text-white font-medium">{value}%</span>
                          </div>
                          <Progress value={value} className="h-2" />
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Stats */}
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-4 bg-black/20 rounded-lg">
                    <div className="text-center">
                      <Users className="w-5 h-5 text-green-400 mx-auto mb-1" />
                      <p className="text-2xl font-bold text-white">{pred.stats.homeWins}</p>
                      <p className="text-xs text-gray-400">Vitórias Casa</p>
                    </div>
                    <div className="text-center">
                      <Users className="w-5 h-5 text-red-400 mx-auto mb-1" />
                      <p className="text-2xl font-bold text-white">{pred.stats.awayWins}</p>
                      <p className="text-xs text-gray-400">Vitórias Fora</p>
                    </div>
                    <div className="text-center">
                      <Activity className="w-5 h-5 text-yellow-400 mx-auto mb-1" />
                      <p className="text-2xl font-bold text-white">{pred.stats.draws}</p>
                      <p className="text-xs text-gray-400">Empates</p>
                    </div>
                    <div className="text-center">
                      <Target className="w-5 h-5 text-blue-400 mx-auto mb-1" />
                      <p className="text-2xl font-bold text-white">{pred.stats.goalsAvg}</p>
                      <p className="text-xs text-gray-400">Golos Média</p>
                    </div>
                  </div>

                  {/* Confidence Badge */}
                  <div className="mt-4 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className={`w-3 h-3 rounded-full ${getConfidenceBadge(pred.confidence)}`}></div>
                      <span className="text-sm text-gray-300">
                        {pred.confidence >= 80 ? 'Alta Confiança' : 
                         pred.confidence >= 70 ? 'Média Confiança' : 
                         'Baixa Confiança'}
                      </span>
                    </div>
                    <Button variant="outline" className="border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white">
                      Ver Detalhes
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}

        {/* Disclaimer */}
        {predictions.length > 0 && (
          <Card className="mt-8 bg-orange-500/10 border-orange-500/30">
            <CardContent className="p-6">
              <div className="flex gap-3">
                <AlertCircle className="w-6 h-6 text-orange-400 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-orange-400 mb-2">Aviso Importante</h3>
                  <p className="text-sm text-gray-300">
                    As previsões são baseadas em análise estatística e algoritmos de IA. Apostas desportivas envolvem risco. 
                    Jogue com responsabilidade e apenas com valores que pode perder. Esta ferramenta é apenas para fins informativos 
                    e não garante resultados. Consulte sempre as leis locais sobre apostas.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  )
}
