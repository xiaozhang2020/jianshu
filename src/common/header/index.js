import React from 'react'
import {connect} from 'react-redux'
import {CSSTransition} from 'react-transition-group'
import * as actionCreators from './store/actionCreators'
import {HeaderWraap,Logo,Nav,NavItem,NavSearch,SearchWrapper,Addition,Button} from './style';
 
const Header=(props) =>{
    return (
    <HeaderWraap>
                <Logo href="/"/>
                <Nav>
                    <NavItem className="left active">首页</NavItem>
                    <NavItem className="left">下载App</NavItem>
                    <NavItem className="right">
                    <span className="iconfont">&#xe636;</span>
                    </NavItem>
                    <NavItem className="right">登录</NavItem>
                    <SearchWrapper>
                        <CSSTransition
                         in={props.focused}
                         timeout={200}
                         classNames="slide"
                        >
                    <NavSearch
                    className={props.focused?'focused':""}
                    onFocus={props.handleInputFocus}
                    onBlur={props.handleInputBlur}
                    ></NavSearch>
                    </CSSTransition>
                    <span className={props.focused?'focused iconfont':"iconfont"}>&#xe614;</span>
                    </SearchWrapper>
                 </Nav>   
                 <Addition>
                 <Button className="writting">
                <span className="iconfont"> &#xe61b;</span>
                     写文章</Button>
                    <Button className="reg">注册</Button>
                    
                 </Addition>
            </HeaderWraap>
    )
}

const mapStateToProps = (state, ownProps) => {
    return {
        focused:state.header.focused
    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        handleInputFocus(){
           
            dispatch(actionCreators.searchFocus());
        },
        handleInputBlur(){
           
            dispatch(actionCreators.searchBlur());
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Header);
