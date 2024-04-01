import React, {useEffect, useState} from 'react';
import SearchBox from './SearchBox';
import ContactItem from './ContactItem';
import {useSelector} from 'react-redux';

const ContactList = () => {
    const {contactList, keyword} = useSelector((state) => state);
    console.log(contactList, keyword);
    const [filterList, setFilterList] = useState([]);
    useEffect(() => {
        if (keyword === '') {
            setFilterList(contactList);
        } else {
            let keywordList = contactList.filter((item) => item.name.includes(keyword));
            console.log(keywordList);
            setFilterList(keywordList);
        }
    }, [contactList, keyword]);
    return (
        <div>
            <SearchBox />
            {filterList.map((item, index) => (
                <ContactItem item={item} key={index} />
            ))}
        </div>
    );
};

export default ContactList;
