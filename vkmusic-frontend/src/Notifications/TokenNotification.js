import { useToaster } from "@gravity-ui/uikit";

const useNotifications = (onAuth) => {
    // Get toaster instance
    const { add } = useToaster();
    
    // Buttons callbacks
    function onTokenInput() {
        console.log('onTokenInput');
        onAuth();
    };

    // Factory function
    const createNotification = (options) => () => {
      add({
        ...options,
        type: 'warning',
        isClosable: false,
        autoHiding: false,
        actions: [
            {
                label: 'Ввести токен',
                view: 'action',
                size: 'l',
                onClick: () => onTokenInput(),
                removeAfterClick: true,
            },
        ],
      });
    };

    // Notifications
    const showTokenNotFound = createNotification({
        name: 'token-not-found',
        title: 'Внимание!',
        content: 'Токен не найден. Пожалуйста, предоставьте действительный токен для доступа к музыке.',
    });
  
    const showTokenFormatInvalid = createNotification({
        name: 'token-format-invalid',
        title: 'Внимание!',
        content: 'Неверный формат токена. Пожалуйста, предоставьте действительный токен для доступа к музыке.',
    });

    const showTokenExpired = createNotification({
        name: 'token-expired',
        title: 'Внимание!',
        content: 'Токен устарел или недействителен. Пожалуйста, предоставьте действительный токен для доступа к музыке.',
    });
  
    return {
        showTokenNotFound,
        showTokenFormatInvalid,
        showTokenExpired,
    };
};

export default useNotifications;