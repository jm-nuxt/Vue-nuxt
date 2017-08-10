import { Router } from 'express'

import users from './users'

import shops from './shops'

const router = Router()

// Add USERS Routes
router.use(users)

// Add SHOPS Routes
router.use(shops)

export default router
