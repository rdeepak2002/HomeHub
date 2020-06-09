from kivy.app import App
from kivy.uix.label import Label
from kivy.core.window import Window

Window.size = (1024, 600)
Window.fullscreen = True

class MyApp(App):
    def build(self):
        return Label(text='Hello world')

if __name__ == '__main__':
    MyApp().run()
