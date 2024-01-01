from . import Singleton


class GlobalService(Singleton):
    def __init__(self, service):
        self.service = service
