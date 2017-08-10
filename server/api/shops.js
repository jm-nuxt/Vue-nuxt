import { Router } from 'express'
import axios from 'axios'

const router = Router()

// /* GET shops listing. */
router.get('/shops', function (req, res, next) {
  axios.get('https://www.ele.me/restapi/shopping/restaurants?extras%5B%5D=activities&geohash=wtmkps3fh90&latitude=30.25807&limit=24&longitude=120.215&offset=0&terminal=web')
    .then(function (data) {
      res.json(data.data)
    }, function (err) {
      res.json(err)
    })
})

// /* GET shop detail */
// router.get('/shops/:id', function (req, res, next) {
//   const query = req.query
//   const id = query.id
//   axios.get('https://www.ele.me/restapi/shopping/restaurant/' + id + '?extras%5B%5D=activities&extras%5B%5D=license&extras%5B%5D=identification&extras%5B%5D=albums&extras%5B%5D=flavors&latitude=30.25807&longitude=120.215')
//     .then(function (data) {
//       // console.log(data)
//       res.json(data.data)
//     })
// })
export default router
