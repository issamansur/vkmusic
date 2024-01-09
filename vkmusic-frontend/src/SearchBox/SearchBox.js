import { TextInput, Button, Select } from "@gravity-ui/uikit";
import { useState, useRef } from 'react';

import './SearchBox.css';

const SearchBox = (props) => {
    // Refs
    const inputRef = useRef();

    // State
    const [selectedType, setSelectedType] = useState('1');

    // Handlers
    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            search(e.target.value);
        }
    };

    const handleButtonClick = () => {
        search(inputRef.current.value);
    }
    // Components
    const itemSelectOptions = [
        { value: '1', content: 'Песня' },
        { value: '2', content: 'Плейлист' },
        { value: '3', content: 'Альбом' },
    ];

    const ItemSelect = <Select
        value={[selectedType]}
        onUpdate={(value) => setSelectedType(value[0])}

        size="l"
        pin="round-brick"
        width={120}
        
        options={itemSelectOptions}
        defaultValue={['1']}
        />;
    
    const ActionButton = <Button
        view="action"
        size="l"
        title="Найти"
        onClick={handleButtonClick}>
            Найти
        </Button>;

    // Functions
    const search = (query) => {
        let type = selectedType;
        props.onSearch(query, type);
    }

    return (
        <div className="search-container">
            <TextInput
                controlRef={inputRef}
                autoFocus={true}

                size="xl"
                pin="round-round" 

                placeholder="Введите название или исполнителя"
                type="text"
                onKeyPress={handleKeyPress}

                hasClear={true}
                leftContent={ItemSelect}
                rightContent={ActionButton}
            />
        </div>
    );
}

export default SearchBox;