import { useState, useEffect } from 'react'
import { BoardLayout } from '../../../common'
import { RecruitWrap } from '../../styled'
import { RecruitTop, RecruitForm } from '../../content/recruitContents'
import { useParams, useLocation } from 'react-router-dom'
import { request, domain } from '../../../utils/axios'

const fetchRecruitData = async (recruitIndex) => {
  try {
    const response = await request.get(
      `${domain}recruit/getonerecruit/${recruitIndex}`
    )
    return response.data
  } catch (e) {
    console.log(e)
  }
}

export const RecruitWrite = () => {
  const { recruitIndex } = useParams()
  const location = useLocation()
  const [isModify, setIsModify] = useState(false)
  const [recruitData, setRecruitData] = useState(null)

  useEffect(() => {
    if (location.pathname.includes('modify')) {
      setIsModify(true)
      fetchRecruitData(recruitIndex).then((data) => {
        setRecruitData(data)
      })
    } else {
      setIsModify(false)
    }
  }, [location.pathname, recruitIndex])

  return (
    <>
      <BoardLayout>
        <RecruitWrap>
          <RecruitTop />
          <RecruitForm isModify={isModify} recruitData={recruitData} />
        </RecruitWrap>
      </BoardLayout>
    </>
  )
}
