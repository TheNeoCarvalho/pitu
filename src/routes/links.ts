import { Router } from 'express'
import linkController from '../controllers/linksController'

const router = Router()

router.post('/links', linkController.postLink)

router.get('/links/:code', linkController.hitLink)

router.get('/links/:code/stats', linkController.getLink)

export default router