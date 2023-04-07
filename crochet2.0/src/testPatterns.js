export const testPatterns = {
    patternShort: {
        "sectionName": "Crochet Blanket Pattern",
        "author": "Jane Doe",
        "sections": [
          {
            "sectionName": "Main Body",
            "rows": [
              [
                {"name": "Chain", "value": 1}
              ],
              [
                {"name": "SC", "value": 1},
                {"name": "SC", "value": 1},
                {"name": "SC", "value": 1}
              ],
              [
                {"name": "Repeat", "value": 48, "instruction": "SC in each stitch across"}
              ],
              [
                {"name": "Change", "instruction": "to a new color"},
                {"name": "Repeat", "value": 1, "instruction": "SC in each stitch across"}
              ],
              [
                {"name": "Repeat", "value": 24, "instruction": "SC in each stitch across with new color"}
              ],
              [
                {"name": "Change", "instruction": "back to original color"},
                {"name": "Repeat", "value": 1, "instruction": "SC in each stitch across"}
              ],
              [
                {"name": "Repeat", "value": 24, "instruction": "SC in each stitch across with original color"}
              ]
            ]
          },
          {
            "sectionName": "Border",
            "rows": [
              [
                {"name": "SC", "instruction": "evenly around the entire blanket, working 3 SC in each corner stitch"}
              ],
              [
                {"name": "SC", "instruction": "in each stitch around, working 3 SC in the center stitch of each corner group"}
              ],
              [
                {"name": "Repeat", "value": 1, "instruction": "SC in each stitch around"}
              ],
              [
                {"name": "SC", "instruction": "in each stitch around, working 2 SC in the center stitch of each corner group"}
              ],
              [
                {"name": "Repeat", "value": 1, "instruction": "SC in each stitch around"}
              ],
              [
                {"name": "SC", "instruction": "in each stitch around, working 1 SC in the center stitch of each corner group"}
              ]
            ]
          }
        ]
      }
,      
    patternLong: [
        [{name: "SC", value: 1, complete: false},{name: "SC", value: 1, complete: false},{name: "SC", value: 1, complete: false},],
        [{name: "SC", value: 0, complete: false},{name: "INC", value: 1, complete: false},{name: "SC", value: 0, complete: false}, {name: "INC", value: 1, complete: false},{name: "SC", value: 0, complete: false},{name: "INC", value: 1, complete: false},],
        [{name: "SC", value: 0, complete: false},{name: "SC", value: 0, complete: false},{name: "SC", value: 0, complete: false},],
    ],
patternExperimental:{ "sections": [
    {
        "title": "Head"
        ,
        "rows": [
            [
                {"name":"sc","value":1,"complete":false},
                {"name":"sc","value":1,"complete":false},
                {"name":"sc","value":1,"complete":false},
                {"name":"sc","value":1,"complete":false},
                {"name":"sc","value":1,"complete":false},
                {"name":"sc","value":1,"complete":false}
                ,{"name":"sc","value":1,"complete":false}
                ,{"name":"sc","value":1,"complete":false}
                ,{"name":"sc","value":1,"complete":false}
                ,{"name":"sc","value":1,"complete":false}
                ,{"name":"sc","value":1,"complete":false}
                ,{"name":"sc","value":1,"complete":false}
            ],
                [
                    {"name":"sc","value":1,"complete":false}
                    ,{"name":"sc","value":1,"complete":false}
                    ,{"name":"sc","value":1,"complete":false}
                    ,{"name":"sc","value":1,"complete":false},
                    {"name":"sc","value":1,"complete":false},
                    {"name":"sc","value":1,"complete":false}
                ]
                ,
                [
                    {"name":"sc","value":1,"complete":false},
                    {"name":"sc","value":1,"complete":false},
                    {"name":"sc","value":1,"complete":false},
                    {"name":"sc","value":1,"complete":false},
                    {"name":"sc","value":1,"complete":false},
                    {"name":"sc","value":1,"complete":false},
                    {"name":"sc","value":1,"complete":false},
                    {"name":"sc","value":1,"complete":false},
                    {"name":"sc","value":1,"complete":false},
                    {"name":"sc","value":1,"complete":false},
                    {"name":"sc","value":1,"complete":false},
                    {"name":"sc","value":1,"complete":false},
                    {"name":"sc","value":1,"complete":false},
                    {"name":"sc","value":1,"complete":false}
                ]
                    ,
                [
                        {"name":"inc","value":1,"complete":false}
                        ,{"name":"inc","value":1,"complete":false}
                        ,{"name":"inc","value":1,"complete":false}
                        ,{"name":"inc","value":1,"complete":false}
                        ,{"name":"inc","value":1,"complete":false}
                        ,{"name":"inc","value":1,"complete":false}
                        ,{"name":"inc","value":1,"complete":false},
                        {"name":"inc","value":1,"complete":false},
                        {"name":"inc","value":1,"complete":false},
                        {"name":"inc","value":1,"complete":false},
                        {"name":"inc","value":1,"complete":false},
                        {"name":"inc","value":1,"complete":false}]
                    ]
                }
                ,
                {
                    "title":"Body",
                    "rows": [
                        [
                            {"name":"binc","value":1,"complete":false},
                            {"name":"binc","value":1,"complete":false},
                            {"name":"binc","value":1,"complete":false},
                            {"name":"binc","value":1,"complete":false},
                            {"name":"binc","value":1,"complete":false},
                            {"name":"binc","value":1,"complete":false},
                            {"name":"binc","value":1,"complete":false},
                            {"name":"binc","value":1,"complete":false},
                            {"name":"binc","value":1,"complete":false},
                            {"name":"binc","value":1,"complete":false},
                            {"name":"binc","value":1,"complete":false},
                            {"name":"binc","value":1,"complete":false}
                        ],
                        [
                            {"name":"bsc","value":1,"complete":false},
                            {"name":"bsc","value":1,"complete":false},
                            {"name":"bsc","value":1,"complete":false},
                            {"name":"bsc","value":1,"complete":false},
                            {"name":"bsc","value":1,"complete":false},
                            {"name":"bsc","value":1,"complete":false}
                        ]
                            ,
                            [
                                {"name":"bdec","value":1,"complete":false}
                                ,{"name":"bdec","value":1,"complete":false}
                                ,{"name":"bdec","value":1,"complete":false}
                                ,{"name":"bdec","value":1,"complete":false}
                                ,{"name":"bdec","value":1,"complete":false}
                                ,{"name":"bdec","value":1,"complete":false}
                                ,{"name":"bdec","value":1,"complete":false}
                                ,{"name":"bdec","value":1,"complete":false}
                                ,{"name":"bdec","value":1,"complete":false}
                                ,{"name":"bdec","value":1,"complete":false}
                                ,{"name":"bdec","value":1,"complete":false}
                                ,{"name":"bdec","value":1,"complete":false}
                                ,{"name":"bdec","value":1,"complete":false}
                                ,{"name":"bdec","value":1,"complete":false}
                                ,{"name":"bdec","value":1,"complete":false}
                                ,{"name":"bdec","value":1,"complete":false}
                                ,{"name":"bdec","value":1,"complete":false}
                                ,{"name":"bdec","value":1,"complete":false}
                            ]
                        ]
                    }
                        ,
                        {
                            "title":"arms"
                        ,
                        "rows":[
                            [
                                {"name":"asc","value":1,"complete":false}
                                ,{"name":"asc","value":1,"complete":false}
                                ,{"name":"asc","value":1,"complete":false}
                                ,{"name":"asc","value":1,"complete":false},
                                {"name":"asc","value":1,"complete":false}
                                ,{"name":"asc","value":1,"complete":false}
                                ,{"name":"asc","value":1,"complete":false}
                                ,{"name":"asc","value":1,"complete":false}
                                ,{"name":"asc","value":1,"complete":false}
                                ,{"name":"asc","value":1,"complete":false}
                                ,{"name":"asc","value":1,"complete":false}
                                ,{"name":"asc","value":1,"complete":false}
                            ],
                            [
                                {"name":"adc","value":1,"complete":false}
                                ,{"name":"adc","value":1,"complete":false}
                                ,{"name":"adc","value":1,"complete":false}
                                ,{"name":"adc","value":1,"complete":false}
                            ]
                            ,
                            [
                                {"name":"apc","value":1,"complete":false},
                                {"name":"apc","value":1,"complete":false},
                                {"name":"apc","value":1,"complete":false},
                                {"name":"apc","value":1,"complete":false},
                                {"name":"apc","value":1,"complete":false},
                                {"name":"apc","value":1,"complete":false},
                                {"name":"apc","value":1,"complete":false}]
                            ]
                        }
                    ]
                }
            };