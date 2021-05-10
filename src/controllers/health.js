/**
 * HealthCheckController
 *
 * @description :: Sole purpose of this controller is to check health of this app
 */

export default {
	find: (_, res) => res.status(200).json({ message: 'All is well!!' })
};