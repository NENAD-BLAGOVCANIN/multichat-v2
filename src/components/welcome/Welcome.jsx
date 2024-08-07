import React from 'react'
import { useTranslation } from 'react-i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { ReactComponent as ChatIcon } from '../../assets/img/svg/chat.svg'
import { ChatDots } from 'react-bootstrap-icons';

function Welcome() {

    const { t } = useTranslation();

    return (
        <div className='main-content-wrapper p-0'>
            <div className='d-flex align-items-center justify-content-center' style={{ height: 'calc(100vh - 50px)' }}>
                <div className='d-flex flex-column align-items-center'>
                    <p className='mb-2'><ChatDots className='h2' /></p>
                    <p className='mb-2'>{t('home.create_new_tab')}</p>
                </div>
            </div>
        </div>
    )
}

export default Welcome