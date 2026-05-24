export type BureaucracyWorkerResponse = {
    results: BureaucracyAnswerResponse[];
    totalExecutionTime: number;
};
export type BureaucracyAnswerResponse = {
    index: number;
    answer: bigint;
};
export declare class BureaucracyReviewResult {
    review: string;
    totalCalculationTime: number;
    constructor(review: string, totalCalculationTime: number);
}
