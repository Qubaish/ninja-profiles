import React, { useState, useEffect } from 'react';
import InfiniteScroll from 'react-infinite-scroller';
import ProfileCard from '../../molecules/ProfileCard';
import Filters from '../../atoms/Filters';
import { apiUrl, profilesToShow } from '../../utils/constant';
import { StyledContainer, StyledProfileWrapper } from './styled';

let globalArr = [];
let filteredArr = [];
let recordsCount = 0;

export default function NinjaProfiles() {

    const [profiles, setProfiles] = useState([]);
    const [hasMore, setHasMore] = useState(false);
    const [offices, setOffices] = useState([]);

    const getProfiles = () => {
        fetch(apiUrl)
        .then((resp) => resp.json())
        .then(function(data) {
            globalArr = sortProfilesByNameAndLocation(data);
            recordsCount = globalArr.length;
            checkHasMore(recordsCount);
            setOffices([...new Set(data.map(p => p.office))]);
            setProfiles([...globalArr].slice(0, profilesToShow));
        });
    }

    useEffect(() => {
        getProfiles();
    }, []);

    const sortProfilesByNameAndLocation = data => {
        const sortedProfiles = data.sort(
            function(a, b) {          
               if (a.office === b.office) {
                  return a.name.localeCompare(b.name);
               }
               return a.office > b.office ? 1 : -1;
        });
        return sortedProfiles;
    };

    const onNameChange = ({target}) => {
        const { value } = target;
        if (value && value.length > 1) {
            filteredArr = [...globalArr].filter(c => c.name.toLowerCase().includes(value.toLowerCase()));
            recordsCount = filteredArr.length;
            checkHasMore(recordsCount);
            setProfiles(filteredArr.slice(0, profilesToShow));
        };
        if(!value) {
            setProfilesToDefault();
        }
    }

    const onLocationSelect = ({target}) => {
        const { value } = target;
        if (value) {
            filteredArr = [...globalArr].filter(d => d.office === value);
            recordsCount = filteredArr.length;
            checkHasMore(recordsCount);
            setProfiles(filteredArr.slice(0, profilesToShow));
        }
        if(!value) {
            setProfilesToDefault();
        }
    }

    const checkHasMore = length => length >= profilesToShow ? setHasMore(true) : setHasMore(false);

    const setProfilesToDefault = () => {
        setProfiles(globalArr.slice(0, profilesToShow));
        setHasMore(true);
        filteredArr = [];
        recordsCount = globalArr.length;
    }

    const loadFunc = page => {
        const recordsToShow = page * profilesToShow;
        if( recordsToShow >= recordsCount) {
            setHasMore(false);
        }
        const arrToPush = filteredArr.length > 0 ? [...filteredArr] : [...globalArr];
        const profiles = arrToPush.slice(0, recordsToShow);
        setProfiles(profiles);
    };

    return (
        <StyledContainer>
            <Filters cities={offices} onNameChange={onNameChange} onLocationSelect={onLocationSelect}/>
            {profiles.length === 0 && (<h1>No Records Found</h1>)}
            <InfiniteScroll
                pageStart={1}
                loadMore={loadFunc}
                initialLoad={false}
                threshold={20}
                hasMore={hasMore}
                loader={
                <div className="loader" key={0}>
                    Loading ...
                </div>
                }
            >
                <StyledProfileWrapper data-testid="profile-wrapper">
                    {profiles.map((profile, i) => (
                        <ProfileCard className="profile-card" profile={profile} key={i}/>
                    ))}
                </StyledProfileWrapper>
            </InfiniteScroll>
        </StyledContainer>
    );
}