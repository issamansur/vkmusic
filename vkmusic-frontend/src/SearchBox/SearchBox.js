import { TextInput, Button, Select } from "@gravity-ui/uikit";
import { useRef } from 'react';

const SearchBox = () => {
    // Refs
    const inputRef = useRef();

    // State
    // ...

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
        { value: '2', content: 'Альбом' },
    ];

    const ItemSelect = <Select
        size="l"
        pin="round-brick"
        width={120}
        defaultValue={['1']} 
        options={itemSelectOptions} 
        />;
    
    const ActionButton = <Button
        size="l"
        onClick={handleButtonClick}>Найти</Button>;

    // Functions
    const search = (query) => {
        console.log(query);
    }

    return (
        <div>
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