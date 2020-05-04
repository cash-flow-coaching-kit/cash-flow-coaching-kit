import { IBaseHealthCheck } from "../../../../data/healthChecks/HealthCheckDatabase"

/**
 * Prop shape for the QuizList component
 *
 * @export
 * @interface IQuizListProps
 */
export interface IQuizListProps {
	clientQuizzes: IBaseHealthCheck[]
	removeHealthCheck(id: number): Promise<void>
}
