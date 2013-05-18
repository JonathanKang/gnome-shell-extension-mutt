const Gtk = imports.gi.Gtk;
const GObject = imports.gi.GObject;
const Me = imports.misc.extensionUtils.getCurrentExtension();
const Convenience = Me.imports.convenience;
const EXTENSIONDIR = Me.dir.get_path();

const Gettext = imports.gettext.domain(Me.metadata['gettext-domain']);
const _ = Gettext.gettext;

const MuttIndicatorPrefsWidget = new GObject.Class(
{
    Name: 'MuttIndicatorExtension.Prefs.Widget',
    GTypeName: 'MuttIndicatorExtensionPrefsWidget',
    Extends: Gtk.Box,

    _init: function(params)
    {
        this.parent(params);

        this.initWindow();

        this.add(this.MainBox);
    },

    Window : new Gtk.Builder(),

    initWindow: function ()
    {
        this.Window.add_from_file(EXTENSIONDIR+"/mutt-indicator.ui");

        this.MainBox = this.Window.get_object("main_box");
    }
});

function init() {
    Convenience.initTranslations(Me.metadata['gettext-domain']);
}

function buildPrefsWidget() {
    let widget = new MuttIndicatorPrefsWidget();

    widget.show_all();

    return widget;
}
