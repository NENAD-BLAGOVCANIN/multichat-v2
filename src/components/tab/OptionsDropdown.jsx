import React, { useEffect } from 'react';
import { Dropdown } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClose, faEllipsisV, faGear, faTrash, faPlus } from '@fortawesome/free-solid-svg-icons';
import { ReactComponent as TrashIcon } from '../../assets/img/svg/trash.svg'
import { ReactComponent as SettingsIcon } from '../../assets/img/svg/settings.svg'
import { useTranslation } from 'react-i18next';

function OptionsDropdown({ tabId, chat = null, closeOptionsDropdown, openDeleteTabModal, openTabSettingsModal }) {

    const { t } = useTranslation();

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (!event.target.closest('.dropdown-menu')) {
                closeOptionsDropdown();
            }
        };

        document.addEventListener('click', handleClickOutside);
        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, [closeOptionsDropdown]);

    return (
        <Dropdown.Menu show className="options-menu-dropdown shadow-lg">
            <Dropdown.Item className="hover d-flex align-items-center" onClick={(event) => { openTabSettingsModal(event, chat) }}>
                <SettingsIcon />
                <span className='ps-2 medium'>
                    {t('chat_settings.title')}
                </span>

            </Dropdown.Item>
            <Dropdown.Item className="hover text-danger d-flex align-items-center" onClick={(event) => { openDeleteTabModal(event, chat) }}>
                <TrashIcon />
                <span className='ps-2 medium'>
                    {t('delete_chat.title')}
                </span>
            </Dropdown.Item>
        </Dropdown.Menu>
    );
}

export default OptionsDropdown;
