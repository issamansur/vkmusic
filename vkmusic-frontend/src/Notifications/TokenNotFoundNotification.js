import { useToaster } from "@gravity-ui/uikit";

const useToasterNotifications = () => {
    const { add } = useToaster();

    function onClick1() {
        alert('clicked');
    }
    
    const showTokenNotFoundError = () => {
        add({
            name: 'token-error',
            title: 'Токен не найден',
            content: 'Токен не найден. Пожалуйста, авторизуйтесь.',
            type: 'warning',
            isClosable: false,
            autoHiding: false,

        actions: [
                {
                    label: 'Ввести токен',
                    
                    view: 'action',
                    size: 'l',

                    onClick: onClick1,
                    removeAfterClick: true,
                }
            ],
        });
    };

    return { showTokenNotFoundError };
}

export default useToasterNotifications;