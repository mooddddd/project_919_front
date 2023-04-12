import { BoardLayout } from '../../../common'
import { RecruitWrap } from '../../styled'
import { RecruitTop, RecruitForm } from '../../content/recruitContents'

export const RecruitWrite = () => {
  return (
    <>
      <BoardLayout>
        <RecruitWrap>
          <RecruitTop />
          <RecruitForm />
        </RecruitWrap>
      </BoardLayout>
    </>
  )
}
