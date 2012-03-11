// SAMPLE
this.manifest = {
    "name": "GitHub Inbox",
    "icon": "../../icon.png",
    "settings": [
        {
            "tab": i18n.get("behavior"),
            "group": i18n.get("general"),
            "name": "badge-counter",
            "type": "checkbox",
            "label": i18n.get("badge-counter")
        },
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
            "group": i18n.get("destination"),
            "name": "destination",
            "type": "radioButtons",
            "label": i18n.get("destination-desc"),
            "options": [
                ["private-messages", i18n.get("private-messages")],
                ["notifications", i18n.get("notifications")]
            ]
        }
    ],
    "alignment": []
};