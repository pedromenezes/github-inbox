this.manifest = {
    "name": "GitHub Notifications",
    "icon": "../../icon.png",
    "settings": [
        {
            "tab": i18n.get("behavior"),
            "group": i18n.get("general"),
            "name": "interval",
            "type": "slider",
            "label": i18n.get("interval"),
            "max": 300000,
            "min": 30000,
            "step": 30000,
            "display": true,
            "displayModifier": function (value) {
                return (value / 1000).floor() + " " + i18n.get("seconds");
            }
        },
        {
            "tab": i18n.get("behavior"),
            "group": i18n.get("badge"),
            "name": "show-badge-even-with-zero-messages",
            "type": "checkbox",
            "label": i18n.get("show-badge-even-with-zero-messages")
        }
    ],
    "alignment": []
};