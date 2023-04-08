import { BoardLayout } from '../../../common'
import { Allwrap, PostWrapper, PostItem } from '../../styled'
import { Category } from '../../content/recruitContents'

export const RecruitList = () => {
  return (
    <>
      <BoardLayout>
        <Allwrap>
          <Category />
          <PostWrapper>
            <PostItem></PostItem>
            <PostItem>234</PostItem>
            <PostItem>345</PostItem>
            <PostItem>456</PostItem>
            <PostItem>456</PostItem>
            <PostItem>456</PostItem>
            <PostItem>456</PostItem>
            <PostItem>456</PostItem>
          </PostWrapper>
        </Allwrap>
      </BoardLayout>
    </>
  )
}
