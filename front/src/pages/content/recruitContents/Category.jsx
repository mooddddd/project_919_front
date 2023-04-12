import { CategoryStyled, PlatformBtn } from '../../styled'
import { NavLink } from 'react-router-dom'
import { Button } from '../../../common'

const PublicURL = process.env.PUBLIC_URL

export const Category = ({ onCategoryClick }) => {
  const handleClick = (category) => {
    if (onCategoryClick) {
      onCategoryClick(category)
    }
  }

  return (
    <>
      <CategoryStyled>
        <ul>
          <li>
            <PlatformBtn
              imageUrl={`${PublicURL}/img/Allview.png`}
              onClick={() => handleClick('all')}
            />
          </li>
          <li>
            <PlatformBtn
              imageUrl={`${PublicURL}/img/ing.png`}
              onClick={() => handleClick('recruiting')}
            />
          </li>
          <li>
            <PlatformBtn
              imageUrl={`${PublicURL}/img/complete.png`}
              onClick={() => handleClick('completed')}
            />
          </li>
          <li>
            <PlatformBtn
              imageUrl={`${PublicURL}/img/platformLogo/youtube.png`}
              onClick={() => handleClick('youtube')}
            />
          </li>
          <li>
            <PlatformBtn
              imageUrl={`${PublicURL}/img/platformLogo/netflix.png`}
              onClick={() => handleClick('netflix')}
            />
          </li>
          <li>
            <PlatformBtn
              imageUrl={`${PublicURL}/img/platformLogo/disney.png`}
              onClick={() => handleClick('disneyPlus')}
            />
          </li>
          <li>
            <PlatformBtn
              imageUrl={`${PublicURL}/img/platformLogo/tving.png`}
              onClick={() => handleClick('tving')}
            />
          </li>
          <li>
            <PlatformBtn
              imageUrl={`${PublicURL}/img/platformLogo/watcha.png`}
              onClick={() => handleClick('watcha')}
            />
          </li>
          <li>
            <PlatformBtn
              imageUrl={`${PublicURL}/img/platformLogo/wavve.png`}
              onClick={() => handleClick('wavve')}
            />
          </li>
        </ul>
        <NavLink to="/community/recruit/write">
          <Button width="10rem" height="2rem" color="red">
            파티장 되기
          </Button>
        </NavLink>
      </CategoryStyled>
    </>
  )
}
