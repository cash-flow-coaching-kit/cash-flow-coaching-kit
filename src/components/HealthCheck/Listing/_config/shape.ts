import { HealthCheckDataStruct } from "../../../../data/_config/shape"

/**
 * Prop shape for the QuizList component
 *
 * @export
 * @interface IQuizListProps
 */
export interface IQuizListProps {
	clientQuizzes: HealthCheckDataStruct[]
	removeHealthCheck(id: number): Promise<void>
}
