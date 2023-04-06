import { BoardLayout } from '../../../common'
import { Allwrap, ViewWrap } from '../../styled'
import { Category, ViewOne } from '../../content/recruitContents'

export const RecruitView = () => {
  return (
    <>
      <BoardLayout>
        <Allwrap>
          <Category />
          <ViewWrap>
            <ViewOne />
          </ViewWrap>
        </Allwrap>
      </BoardLayout>
    </>
  )
}
