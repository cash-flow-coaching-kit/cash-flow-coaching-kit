import {
	HealthCheckDataStruct,
	DatabaseId,
} from "../../../../data/_config/shape"

/**
 * Prop shape for the QuizList component
 *
 * @export
 * @interface IQuizListProps
 */
export interface IQuizListProps {
	clientQuizzes: HealthCheckDataStruct[]
	removeHealthCheck(id: DatabaseId): Promise<void>
}
