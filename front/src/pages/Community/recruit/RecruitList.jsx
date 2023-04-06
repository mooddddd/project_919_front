import { BoardLayout } from '../../../common'
import { Allwrap, PostWrapper } from '../../styled'
import { Category, PostOne } from '../../content/recruitContents'

export const RecruitList = () => {
  return (
    <>
      <BoardLayout>
        <Allwrap>
          <Category />
          <PostWrapper>
            <PostOne />
          </PostWrapper>
        </Allwrap>
      </BoardLayout>
    </>
  )
}
