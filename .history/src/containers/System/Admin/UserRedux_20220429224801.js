import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { LANGUAGES } from "../../../utils"
import { connect } from 'react-redux';
import * as actions from "../../../store/actions";
import './UserRedux.scss';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css'; // This only needs to be imported once in your app



class UserRedux extends Component {

    constructor(props) {
        super(props);
        this.state = {
            genderArr: [],
            positionArr: [],
            roleArr: [],
            previewImgURL: '',
            isOpen: false,
        }
    }

    async componentDidMount() {
        this.props.getGenderStart();    
        this.props.getRoleStart();
        this.props.getPositionStart();
        // this.props.dispatch(actions.getGenderStart());

        // try {
        //     let res = await getAllCodeService('gender');
        //     console.log('check res', res);
        //     if (res && res.errCode === 0) {
        //         this.setState({
        //             genderArr: res.data
        //         })   
        //     }
        // } catch (e) {
        //     console.log(e)
        // }
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if(prevProps.genderRedux !== this.props.genderRedux) {
            this.setState ({
                genderArr: this.props.genderRedux
            })
        }

        if(prevProps.roleRedux !== this.props.roleRedux) {
            this.setState ({
                roleArr: this.props.roleRedux
            })
        }

        if(prevProps.positionRedux !== this.props.positionRedux) {
            this.setState ({
                positionArr: this.props.positionRedux
            })
        }
    }

    handleOnChangeImage = (event) => {
        let data = event.target.files;
        let file = data[0];
        if(file) {
            let objectUrl = URL.createObjectURL(file)
            this.setState ({
                previewImgURL: objectUrl

            })

        }
    }



    render() {
        let genders = this.state.genderArr;
        let roles = this.state.roleArr;
        let positions = this.state.positionArr;

        let language = this.props.language;
        let isGetGenders = this.props.isLoadingGender
        console.log('check props from redux', this.state)
        return (
            <div className="user-redux-container">
                <div className="title">
                    UserRedux hoi dan it nguyễn văn công 
                </div>
                <div className="user-redux-body">
                    <div className="container">
                        <div className="row">
                            <div className="col-12 my-3"><FormattedMessage id="manage-user.add"/></div>
                            <div  className="col-12">{isGetGenders === true ? 'Loading genders' : ''}</div>

                            <div className="col-3">
                                <label><FormattedMessage id="manage-user.email"/></label>
                                <input className="form-control" type="email" />
                            </div>

                            <div className="col-3">
                                <label><FormattedMessage id="manage-user.password"/></label>
                                <input className="form-control" type="password" />
                            </div>

                            <div className="col-3">
                                <label><FormattedMessage id="manage-user.first-name"/></label>
                                <input className="form-control" type="text" />
                            </div>

                            <div className="col-3">
                                <label><FormattedMessage id="manage-user.last-name"/></label>
                                <input className="form-control" type="text" />
                            </div>

                            <div className="col-3">
                                <label><FormattedMessage id="manage-user.phone-number"/></label>
                                <input className="form-control" type="text" />
                            </div>

                            <div className="col-9">
                                <label><FormattedMessage id="manage-user.address"/></label>
                                <input className="form-control" type="text" />
                            </div>

                            <div className="col-3">
                                <label><FormattedMessage id="manage-user.gender"/></label>
                                <select className="form-control">
                                    {genders && genders.length > 0 && 
                                        genders.map((item , index) => {
                                            return (
                                                <option key={index} >{ language === LANGUAGES.VI ? item.valueVi : item.valueEn}</option>
                                                        
                                            )
                                        })
                                    
                                    }
                                    <option value=""></option>
                                </select>
                            </div>

                            <div className="col-3">
                                <label><FormattedMessage id="manage-user.position"/></label>
                                <select className="form-control">
                                    {positions && positions.length > 0 && positions.map((item , index) => {
                                        return (
                                            <option key={index} >{ language === LANGUAGES.VI ? item.valueVi : item.valueEn}</option>

                                        )
                                    })}

                                </select>
                            </div>

                            <div className="col-3">
                                <label><FormattedMessage id="manage-user.role"/></label>
                                <select className="form-control">
                                    {roles && roles.length > 0 && roles.map((item , index) => {
                                        return (
                                            <option key={index} >{ language === LANGUAGES.VI ? item.valueVi : item.valueEn}</option>

                                        )
                                    })}

                                </select>
                            </div>

                            <div className="col-3">
                                <label><FormattedMessage id="manage-user.image"/></label>
                                <div className="preview-img-container">
                                    <input id="previewImg" type="file" hidden
                                    onChange={(event) => this.handleOnChangeImage(event)}
                                    />
                                    <label className="label-upload" htmlFor="previewImg">Tải ảnh <i className="fas fa-upload"></i></label>
                                    <div className="previews-image"
                                        style= {{backgroundImage: `url(${this.state.previewImgURL})`}}
                                    
                                    ></div>
                                </div>
                                
                            </div>

                            <div className="col-12 mt-3">
                                <button className="btn btn-primary"><FormattedMessage id="manage-user.save"/></button>
                            </div>

                        </div>
                    </div>
                </div>   

                <Lightbox
                    mainSrc={images[photoIndex]}
                    onCloseRequest={() => this.setState({ isOpen: false })}
                />
                             
            </div>
        )
    }

}

const mapStateToProps = state => {
    return {
        language: state.app.language,
        genderRedux: state.admin.gender,
        roleRedux: state.admin.role,
        positionRedux: state.admin.position,
        isLoadingGender: state.admin.isLoadingGender,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        getGenderStart: () => dispatch(actions.fetchGenderStart()),

        getPositionStart: () => dispatch(actions.fetchPositionStart()),

        getRoleStart: () => dispatch(actions.fetchRoleStart())
        // processLogout: () => dispatch(actions.processLogout()),
        // changeLanguageAppRedux: (language) => dispatch(actions.changeLanguageApp(language))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserRedux);
