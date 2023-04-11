import { request } from '../../utils'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

export const SearchContent = () => {
  const navigator = useNavigate()
  useEffect(() => {
    ;(async () => {
      try {
        // if ((window.location.pathname = '/serch')) {
        //   alert('잘못된 접근입니다ㅂ!')
        //   return navigator('/')
        // } else { // 어떻게 쫓아내지,,,?
        const result = await request.get(`${window.location.pathname}`)
        console.log(result)
        // }
      } catch (e) {
        throw new Error(e)
      }
    })()
  }, [])
  //   const sch = window.location.search
  //   console.log(window.location.pathname)
  return <> 검색 내용 </>
}
