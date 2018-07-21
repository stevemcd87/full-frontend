export interface ILottoGame {
    name: string,
    valueName: string,
    lotteryLength: number,
    maxNumber: number,
    winnings: {
        straight: IGameWinnings[],
        box: IGameWinnings[],
        straightBox: IGameWinnings
    },
    lottoPossibilities: ILotto[],
    winningHistory: IWinningHistory[]
}
export interface IComparedLotto {
    rank?: number,
    lotto: ILotto,
    straightNumber:  number,
    boxNumber:number,
    straight?: ILottoDetails,
    box?: ILottoDetails,
    straightBox?: ILottoDetails,
    winningDates?: IWinningHistory[],
    moneyWon?: number
}
export interface IGameWinnings {
    price: number,
    boxPrize?: IBoxWay[],
    prize?: number
}
export interface ILotto {
    id: number,
    lotto:number[],
    boxWay: string //enum boxways or straight
}
export interface IWinningHistory {
    date: string,
    numberDate?: number,
    time: string,// enume M or E
    winningNumbers: number[],
    straight?: boolean,
    winnings?: number
    
}
export interface ILottoDetails {
        timesWon: number,
        moneyWon: number,
        averageDraw: number,
        winningDates: IWinningHistory[]
}

export interface IBoxWay {
    boxWay?: string,
    prize?: number
    straightPrize?: number,
    boxPrize?: number
}