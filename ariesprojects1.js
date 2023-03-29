// Copyright 2012 Google Inc. All rights reserved.
(function() {

    var data = {
        "resource": {
            "version": "1",

            "macros": [{
                "function": "__e"
            }, {
                "function": "__c",
                "vtp_value": "c"
            }, {
                "function": "__c",
                "vtp_value": "google.co.id"
            }, {
                "function": "__c",
                "vtp_value": 0
            }, {
                "vtp_signal": 0,
                "function": "__c",
                "vtp_value": 0
            }],
            "tags": [{
                "function": "__gct",
                "vtp_trackingId": "G-F7BELJZMSZ",
                "vtp_sessionDuration": 0,
                "tag_id": 1
            }, {
                "function": "__ccd_conversion_marking",
                "vtp_conversionRules": ["list", ["map", "matchingRules", "{\"type\":5,\"args\":[{\"stringValue\":\"purchase\"},{\"contextValue\":{\"namespaceType\":1,\"keyParts\":[\"eventName\"]}}]}"]],
                "vtp_instanceDestinationId": "G-F7BELJZMSZ",
                "tag_id": 9
            }, {
                "function": "__ccd_em_download",
                "vtp_includeParams": true,
                "vtp_instanceDestinationId": "G-F7BELJZMSZ",
                "tag_id": 11
            }, {
                "function": "__ccd_em_outbound_click",
                "priority": 0,
                "vtp_includeParams": true,
                "vtp_instanceDestinationId": "G-F7BELJZMSZ",
                "tag_id": 12
            }, {
                "function": "__ccd_em_page_view",
                "vtp_historyEvents": true,
                "vtp_includeParams": true,
                "vtp_instanceDestinationId": "G-F7BELJZMSZ",
                "tag_id": 13
            }, {
                "function": "__ccd_em_scroll",
                "vtp_includeParams": true,
                "vtp_instanceDestinationId": "G-F7BELJZMSZ",
                "tag_id": 14
            }, {
                "function": "__ccd_em_site_search",
                "vtp_searchQueryParams": "q,s,search,query,keyword",
                "vtp_includeParams": true,
                "vtp_instanceDestinationId": "G-F7BELJZMSZ",
                "tag_id": 15
            }, {
                "function": "__ccd_em_video",
                "vtp_includeParams": true,
                "vtp_instanceDestinationId": "G-F7BELJZMSZ",
                "tag_id": 16
            }, {
                "function": "__ccd_ga_regscope",
                "vtp_settingsTable": ["list", ["map", "redactFieldGroup", "DEVICE_AND_GEO", "disallowAllRegions", false, "disallowedRegions", ""], ["map", "redactFieldGroup", "GOOGLE_SIGNALS", "disallowAllRegions", true, "disallowedRegions", ""]],
                "vtp_instanceDestinationId": "G-F7BELJZMSZ",
                "tag_id": 17
            }, {
                "function": "__set_product_settings",
                "vtp_instanceDestinationId": "G-F7BELJZMSZ",
                "vtp_foreignTldMacroResult": ["macro", 2],
                "vtp_isChinaVipRegionMacroResult": ["macro", 3],
                "tag_id": 18
            }, {
                "function": "__ogt_google_signals",
                "vtp_googleSignals": "DISABLED",
                "vtp_instanceDestinationId": "G-F7BELJZMSZ",
                "vtp_serverMacroResult": ["macro", 4],
                "tag_id": 19
            }],
            "predicates": [{
                "function": "_eq",
                "arg0": ["macro", 0],
                "arg1": "gtm.js"
            }, {
                "function": "_eq",
                "arg0": ["macro", 0],
                "arg1": "gtm.init"
            }],
            "rules": [[["if", 0], ["add", 0]], [["if", 1], ["add", 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]]]
        },
        "runtime": [[50, "__ccd_conversion_marking", [46, "a"], [50, "s", [46, "t"], [52, "u", [2, [15, "p"], "parse", [7, [15, "t"]]]], [22, [30, [30, [28, [15, "u"]], [28, [16, [15, "u"], "args"]]], [21, [17, [16, [15, "u"], "args"], "length"], 2]], [46, [36]]], [52, "v", [16, [16, [16, [15, "u"], "args"], 1], "contextValue"]], [22, [30, [30, [30, [28, [15, "v"]], [21, [16, [15, "v"], "namespaceType"], 1]], [21, [17, [16, [15, "v"], "keyParts"], "length"], 1]], [21, [16, [16, [15, "v"], "keyParts"], 0], "eventName"]], [46, [36, [44]]]], [52, "w", [16, [16, [15, "u"], "args"], 0]], [36, [1, [15, "w"], [16, [15, "w"], "stringValue"]]]], [22, [30, [28, [17, [15, "a"], "conversionRules"]], [20, [17, [17, [15, "a"], "conversionRules"], "length"], 0]], [46, [2, [15, "a"], "gtmOnSuccess", [7]], [36]]], [52, "b", ["require", "internal.copyPreHit"]], [52, "c", ["require", "internal.evaluateBooleanExpression"]], [52, "d", [13, [41, "$0"], [3, "$0", ["require", "internal.getFlags"]], ["$0"]]], [52, "e", ["require", "internal.registerCcdCallback"]], [52, "f", "is_conversion"], [52, "g", "is_first_visit"], [52, "h", "is_first_visit_conversion"], [52, "i", "is_session_start"], [52, "j", "is_session_start_conversion"], [52, "k", "first_visit"], [52, "l", "session_start"], [22, [16, [15, "d"], "enableCcdGaConversions"], [46, [53, [41, "t"], [41, "u"], ["e", [17, [15, "a"], "instanceDestinationId"], [51, "", [7, "v"], [52, "w", [8, "preHit", [15, "v"]]], [65, "x", [17, [15, "a"], "conversionRules"], [46, [22, ["c", [17, [15, "x"], "matchingRules"], [15, "w"]], [46, [2, [15, "v"], "setMetadata", [7, [15, "f"], true]], [4]]]]], [22, [2, [15, "v"], "getMetadata", [7, [15, "g"]]], [46, [22, [28, [15, "t"]], [46, [53, [52, "x", ["b", [15, "v"], [8, "omitHitData", true, "omitMetadata", true]]], [2, [15, "x"], "setEventName", [7, [15, "k"]]], [3, "t", [8, "preHit", [15, "x"]]]]]], [65, "x", [17, [15, "a"], "conversionRules"], [46, [22, ["c", [17, [15, "x"], "matchingRules"], [15, "t"]], [46, [2, [15, "v"], "setMetadata", [7, [15, "h"], true]], [4]]]]]]], [22, [2, [15, "v"], "getMetadata", [7, [15, "i"]]], [46, [22, [28, [15, "u"]], [46, [53, [52, "x", ["b", [15, "v"], [8, "omitHitData", true, "omitMetadata", true]]], [2, [15, "x"], "setEventName", [7, [15, "l"]]], [3, "u", [8, "preHit", [15, "x"]]]]]], [65, "x", [17, [15, "a"], "conversionRules"], [46, [22, ["c", [17, [15, "x"], "matchingRules"], [15, "u"]], [46, [2, [15, "v"], "setMetadata", [7, [15, "j"], true]], [4]]]]]]]]], [2, [15, "a"], "gtmOnSuccess", [7]], [36]]]], [52, "m", ["require", "internal.setProductSettingsParameter"]], [52, "n", ["require", "internal.getProductSettingsParameter"]], [52, "o", ["require", "getContainerVersion"]], [52, "p", ["require", "JSON"]], [52, "q", [30, [17, [15, "a"], "instanceDestinationId"], [17, ["o"], "containerId"]]], [52, "r", [30, ["n", [15, "q"], "event_settings"], [8]]], [53, [41, "t"], [3, "t", 0], [63, [7, "t"], [23, [15, "t"], [17, [17, [15, "a"], "conversionRules"], "length"]], [33, [15, "t"], [3, "t", [0, [15, "t"], 1]]], [46, [53, [52, "u", ["s", [16, [16, [17, [15, "a"], "conversionRules"], [15, "t"]], "matchingRules"]]], [22, [28, [15, "u"]], [46, [6]]], [41, "v"], [3, "v", [16, [15, "r"], [15, "u"]]], [22, [28, [15, "v"]], [46, [3, "v", [8]], [43, [15, "r"], [15, "u"], [15, "v"]]]], [43, [15, "v"], "conversion", true]]]]], ["m", [15, "q"], "event_settings", [15, "r"]], [2, [15, "a"], "gtmOnSuccess", [7]]], [50, "__ccd_em_download", [46, "a"], [50, "s", [46, "y"], [36, [1, [15, "y"], [21, [2, [2, [15, "y"], "toLowerCase", [7]], "match", [7, [15, "r"]]], [45]]]]], [50, "t", [46, "y"], [52, "z", [2, [17, [15, "y"], "pathname"], "split", [7, "."]]], [52, "ba", [39, [18, [17, [15, "z"], "length"], 1], [16, [15, "z"], [37, [17, [15, "z"], "length"], 1]], ""]], [36, [16, [2, [15, "ba"], "split", [7, "/"]], 0]]], [50, "u", [46, "y"], [36, [39, [12, [2, [17, [15, "y"], "pathname"], "substring", [7, 0, 1]], "/"], [17, [15, "y"], "pathname"], [0, "/", [17, [15, "y"], "pathname"]]]]], [50, "v", [46, "y"], [41, "z"], [3, "z", ""], [22, [1, [15, "y"], [17, [15, "y"], "href"]], [46, [53, [41, "ba"], [3, "ba", [2, [17, [15, "y"], "href"], "indexOf", [7, "#"]]], [3, "z", [39, [23, [15, "ba"], 0], [17, [15, "y"], "href"], [2, [17, [15, "y"], "href"], "substring", [7, 0, [15, "ba"]]]]]]]], [36, [15, "z"]]], [50, "x", [46, "y"], [52, "z", [8]], [43, [15, "z"], [15, "j"], true], [43, [15, "z"], [15, "f"], true], [43, [15, "y"], "eventMetadata", [15, "z"]]], [52, "b", [13, [41, "$0"], [3, "$0", ["require", "internal.getFlags"]], ["$0"]]], [52, "c", ["require", "internal.getProductSettingsParameter"]], [52, "d", ["require", "internal.registerCcdCallback"]], [52, "e", ["require", "templateStorage"]], [52, "f", "speculative"], [52, "g", "ae_block_downloads"], [52, "h", "file_download"], [52, "i", "isRegistered"], [52, "j", "em_event"], [52, "k", [17, [15, "a"], "instanceDestinationId"]], [22, ["c", [15, "k"], [15, "g"]], [46, [2, [15, "a"], "gtmOnSuccess", [7]], [36]]], [52, "l", [28, [28, [16, [15, "b"], "enableCcdEnhancedMeasurement"]]]], [22, [15, "l"], [46, ["d", [15, "k"], [51, "", [7, "y"], [22, [30, [21, [2, [15, "y"], "getEventName", [7]], [15, "h"]], [28, [2, [15, "y"], "getMetadata", [7, [15, "j"]]]]], [46, [36]]], [22, ["c", [15, "k"], [15, "g"]], [46, [2, [15, "y"], "abort", [7]], [36]]], [2, [15, "y"], "setMetadata", [7, [15, "f"], false]], [22, [28, [17, [15, "a"], "includeParams"]], [46, [2, [15, "y"], "setHitData", [7, "link_id", [44]]], [2, [15, "y"], "setHitData", [7, "link_url", [44]]], [2, [15, "y"], "setHitData", [7, "link_text", [44]]], [2, [15, "y"], "setHitData", [7, "file_name", [44]]], [2, [15, "y"], "setHitData", [7, "file_extension", [44]]]]]]]]], [22, [1, [15, "l"], [2, [15, "e"], "getItem", [7, [15, "i"]]]], [46, [2, [15, "a"], "gtmOnSuccess", [7]], [36]]], [52, "m", ["require", "internal.addDataLayerEventListener"]], [52, "n", ["require", "internal.enableAutoEventOnLinkClick"]], [52, "o", ["require", "internal.getDestinationIds"]], [52, "p", ["require", "parseUrl"]], [52, "q", ["require", "internal.sendGtagEvent"]], [52, "r", [0, "^(pdf|xlsx?|docx?|txt|rtf|csv|exe|key|pp(s|t|tx)|7z|pkg|rar|gz|zip|avi|", "mov|mp4|mpe?g|wmv|midi?|mp3|wav|wma)$"]], [52, "w", ["n", [8, "checkValidation", true]]], [22, [28, [15, "w"]], [46, [2, [15, "a"], "gtmOnFailure", [7]], [36]]], [2, [15, "e"], "setItem", [7, [15, "i"], true]], ["m", "gtm.linkClick", [51, "", [7, "y", "z"], ["z"], [52, "ba", [8, "eventId", [16, [15, "y"], "gtm.uniqueEventId"]]], [52, "bb", [16, [15, "y"], "gtm.elementUrl"]], [52, "bc", ["p", [15, "bb"]]], [22, [28, [15, "bc"]], [46, [36]]], [52, "bd", ["t", [15, "bc"]]], [22, [28, ["s", [15, "bd"]]], [46, [36]]], [52, "be", [39, [30, [28, [28, [17, [15, "a"], "includeParams"]]], [15, "l"]], [8, "link_id", [16, [15, "y"], "gtm.elementId"], "link_url", ["v", [15, "bc"]], "link_text", [16, [15, "y"], "gtm.elementText"], "file_name", ["u", [15, "bc"]], "file_extension", [15, "bd"]], [8]]], [22, [15, "l"], [46, ["x", [15, "ba"]], ["q", ["o"], [15, "h"], [15, "be"], [15, "ba"]]], [46, ["q", [15, "k"], [15, "h"], [15, "be"], [15, "ba"]]]]], [15, "w"]], [2, [15, "a"], "gtmOnSuccess", [7]]], [50, "__ccd_em_outbound_click", [46, "a"], [50, "t", [46, "z"], [22, [28, [15, "z"]], [46, [36, [44]]]], [41, "ba"], [3, "ba", ""], [22, [1, [15, "z"], [17, [15, "z"], "href"]], [46, [53, [41, "bb"], [3, "bb", [2, [17, [15, "z"], "href"], "indexOf", [7, "#"]]], [3, "ba", [39, [23, [15, "bb"], 0], [17, [15, "z"], "href"], [2, [17, [15, "z"], "href"], "substring", [7, 0, [15, "bb"]]]]]]]], [36, [15, "ba"]]], [50, "u", [46, "z"], [22, [28, [15, "z"]], [46, [36, [44]]]], [41, "ba"], [3, "ba", [17, [15, "z"], "hostname"]], [52, "bb", [2, [15, "ba"], "match", [7, "^www\\d*\\."]]], [22, [1, [15, "bb"], [16, [15, "bb"], 0]], [46, [3, "ba", [2, [15, "ba"], "substring", [7, [17, [16, [15, "bb"], 0], "length"]]]]]], [36, [15, "ba"]]], [50, "v", [46, "z"], [22, [28, [15, "z"]], [46, [36, false]]], [52, "ba", [2, [17, [15, "z"], "hostname"], "toLowerCase", [7]]], [41, "bb"], [3, "bb", [2, ["u", ["r", ["q"]]], "toLowerCase", [7]]], [41, "bc"], [3, "bc", [37, [17, [15, "ba"], "length"], [17, [15, "bb"], "length"]]], [22, [1, [18, [15, "bc"], 0], [29, [2, [15, "bb"], "charAt", [7, 0]], "."]], [46, [32, [15, "bc"], [3, "bc", [37, [15, "bc"], 1]]], [3, "bb", [0, ".", [15, "bb"]]]]], [22, [1, [19, [15, "bc"], 0], [12, [2, [15, "ba"], "indexOf", [7, [15, "bb"], [15, "bc"]]], [15, "bc"]]], [46, [36, false]]], [36, true]], [50, "y", [46, "z"], [52, "ba", [8]], [43, [15, "ba"], [15, "j"], true], [43, [15, "ba"], [15, "f"], true], [43, [15, "z"], "eventMetadata", [15, "ba"]]], [52, "b", [13, [41, "$0"], [3, "$0", ["require", "internal.getFlags"]], ["$0"]]], [52, "c", ["require", "internal.getProductSettingsParameter"]], [52, "d", ["require", "internal.registerCcdCallback"]], [52, "e", ["require", "templateStorage"]], [52, "f", "speculative"], [52, "g", "ae_block_outbound_click"], [52, "h", "click"], [52, "i", "isRegistered"], [52, "j", "em_event"], [52, "k", [17, [15, "a"], "instanceDestinationId"]], [22, ["c", [15, "k"], [15, "g"]], [46, [2, [15, "a"], "gtmOnSuccess", [7]], [36]]], [52, "l", [28, [28, [16, [15, "b"], "enableCcdEnhancedMeasurement"]]]], [22, [15, "l"], [46, ["d", [15, "k"], [51, "", [7, "z"], [22, [30, [21, [2, [15, "z"], "getEventName", [7]], [15, "h"]], [28, [2, [15, "z"], "getMetadata", [7, [15, "j"]]]]], [46, [36]]], [22, ["c", [15, "k"], [15, "g"]], [46, [2, [15, "z"], "abort", [7]], [36]]], [2, [15, "z"], "setMetadata", [7, [15, "f"], false]], [22, [28, [17, [15, "a"], "includeParams"]], [46, [2, [15, "z"], "setHitData", [7, "link_id", [44]]], [2, [15, "z"], "setHitData", [7, "link_classes", [44]]], [2, [15, "z"], "setHitData", [7, "link_url", [44]]], [2, [15, "z"], "setHitData", [7, "link_domain", [44]]], [2, [15, "z"], "setHitData", [7, "outbound", [44]]]]]]]]], [22, [1, [15, "l"], [2, [15, "e"], "getItem", [7, [15, "i"]]]], [46, [2, [15, "a"], "gtmOnSuccess", [7]], [36]]], [52, "m", ["require", "internal.addDataLayerEventListener"]], [52, "n", ["require", "internal.enableAutoEventOnLinkClick"]], [52, "o", ["require", "internal.getDestinationIds"]], [52, "p", ["require", "internal.getRemoteConfigParameter"]], [52, "q", ["require", "getUrl"]], [52, "r", ["require", "parseUrl"]], [52, "s", ["require", "internal.sendGtagEvent"]], [52, "w", ["p", [15, "k"], "cross_domain_conditions"]], [52, "x", ["n", [8, "affiliateDomains", [15, "w"], "checkValidation", true, "waitForTags", false]]], [22, [28, [15, "x"]], [46, [2, [15, "a"], "gtmOnFailure", [7]], [36]]], [2, [15, "e"], "setItem", [7, [15, "i"], true]], ["m", "gtm.linkClick", [51, "", [7, "z", "ba"], [52, "bb", ["r", [16, [15, "z"], "gtm.elementUrl"]]], [22, [28, ["v", [15, "bb"]]], [46, ["ba"], [36]]], [52, "bc", [39, [30, [28, [28, [17, [15, "a"], "includeParams"]]], [15, "l"]], [8, "link_id", [16, [15, "z"], "gtm.elementId"], "link_classes", [16, [15, "z"], "gtm.elementClasses"], "link_url", ["t", [15, "bb"]], "link_domain", ["u", [15, "bb"]], "outbound", true], [8]]], [43, [15, "bc"], "event_callback", [15, "ba"]], [52, "bd", [8, "eventId", [16, [15, "z"], "gtm.uniqueEventId"]]], [22, [15, "l"], [46, ["y", [15, "bd"]], ["s", ["o"], [15, "h"], [15, "bc"], [15, "bd"]]], [46, ["s", [15, "k"], [15, "h"], [15, "bc"], [15, "bd"]]]]], [15, "x"]], [2, [15, "a"], "gtmOnSuccess", [7]]], [50, "__ccd_em_page_view", [46, "a"], [50, "s", [46, "t"], [52, "u", [8]], [43, [15, "u"], [15, "k"], true], [43, [15, "u"], [15, "g"], true], [43, [15, "t"], "eventMetadata", [15, "u"]]], [22, [28, [17, [15, "a"], "historyEvents"]], [46, [2, [15, "a"], "gtmOnSuccess", [7]], [36]]], [52, "b", [13, [41, "$0"], [3, "$0", ["require", "internal.getFlags"]], ["$0"]]], [52, "c", ["require", "internal.getProductSettingsParameter"]], [52, "d", ["require", "internal.registerCcdCallback"]], [52, "e", ["require", "internal.setRemoteConfigParameter"]], [52, "f", ["require", "templateStorage"]], [52, "g", "speculative"], [52, "h", "ae_block_history"], [52, "i", "page_view"], [52, "j", "isRegistered"], [52, "k", "em_event"], [52, "l", [17, [15, "a"], "instanceDestinationId"]], [22, ["c", [15, "l"], [15, "h"]], [46, [2, [15, "a"], "gtmOnSuccess", [7]], [36]]], [52, "m", [28, [28, [16, [15, "b"], "enableCcdEnhancedMeasurement"]]]], [22, [15, "m"], [46, ["d", [15, "l"], [51, "", [7, "t"], [22, [30, [21, [2, [15, "t"], "getEventName", [7]], [15, "i"]], [28, [2, [15, "t"], "getMetadata", [7, [15, "k"]]]]], [46, [36]]], [22, ["c", [15, "l"], [15, "h"]], [46, [2, [15, "t"], "abort", [7]], [36]]], [2, [15, "t"], "setMetadata", [7, [15, "g"], false]], ["e", [15, "l"], "page_referrer", [2, [15, "t"], "getHitData", [7, "page_referrer"]]], [22, [28, [17, [15, "a"], "includeParams"]], [46, [2, [15, "t"], "setHitData", [7, "page_location", [44]]], [2, [15, "t"], "setHitData", [7, "page_referrer", [44]]]]]]]]], [22, [1, [15, "m"], [2, [15, "f"], "getItem", [7, [15, "j"]]]], [46, [2, [15, "a"], "gtmOnSuccess", [7]], [36]]], [52, "n", ["require", "internal.addDataLayerEventListener"]], [52, "o", ["require", "internal.enableAutoEventOnHistoryChange"]], [52, "p", ["require", "internal.getDestinationIds"]], [52, "q", ["require", "internal.sendGtagEvent"]], [52, "r", ["o", [8, "interval", 1000]]], [22, [28, [15, "r"]], [46, [2, [15, "a"], "gtmOnFailure", [7]], [36]]], [2, [15, "f"], "setItem", [7, [15, "j"], true]], ["n", "gtm.historyChange-v2", [51, "", [7, "t", "u"], ["u"], [52, "v", [16, [15, "t"], "gtm.oldUrl"]], [22, [20, [16, [15, "t"], "gtm.newUrl"], [15, "v"]], [46, [36]]], [52, "w", [16, [15, "t"], "gtm.historyChangeSource"]], [22, [1, [1, [21, [15, "w"], "pushState"], [21, [15, "w"], "popstate"]], [21, [15, "w"], "replaceState"]], [46, [36]]], [52, "x", [39, [30, [28, [28, [17, [15, "a"], "includeParams"]]], [15, "m"]], [8, "page_location", [16, [15, "t"], "gtm.newUrl"], "page_referrer", [15, "v"]], [8]]], [52, "y", [8, "eventId", [16, [15, "t"], "gtm.uniqueEventId"]]], [22, [15, "m"], [46, ["s", [15, "y"]], ["q", ["p"], [15, "i"], [15, "x"], [15, "y"]]], [46, ["q", [15, "l"], [15, "i"], [15, "x"], [15, "y"]], ["e", [15, "l"], "page_referrer", [15, "v"]]]]], [15, "r"]], [2, [15, "a"], "gtmOnSuccess", [7]]], [50, "__ccd_em_scroll", [46, "a"], [50, "r", [46, "s"], [52, "t", [8]], [43, [15, "t"], [15, "j"], true], [43, [15, "t"], [15, "f"], true], [43, [15, "s"], "eventMetadata", [15, "t"]]], [52, "b", [13, [41, "$0"], [3, "$0", ["require", "internal.getFlags"]], ["$0"]]], [52, "c", ["require", "internal.getProductSettingsParameter"]], [52, "d", ["require", "internal.registerCcdCallback"]], [52, "e", ["require", "templateStorage"]], [52, "f", "speculative"], [52, "g", "ae_block_scroll"], [52, "h", "scroll"], [52, "i", "isRegistered"], [52, "j", "em_event"], [52, "k", [17, [15, "a"], "instanceDestinationId"]], [52, "l", [28, [28, [16, [15, "b"], "enableCcdEnhancedMeasurement"]]]], [22, ["c", [15, "k"], [15, "g"]], [46, [2, [15, "a"], "gtmOnSuccess", [7]], [36]]], [22, [15, "l"], [46, ["d", [15, "k"], [51, "", [7, "s"], [22, [30, [21, [2, [15, "s"], "getEventName", [7]], [15, "h"]], [28, [2, [15, "s"], "getMetadata", [7, [15, "j"]]]]], [46, [36]]], [22, ["c", [15, "k"], [15, "g"]], [46, [2, [15, "s"], "abort", [7]], [36]]], [2, [15, "s"], "setMetadata", [7, [15, "f"], false]], [22, [28, [17, [15, "a"], "includeParams"]], [46, [2, [15, "s"], "setHitData", [7, "percent_scrolled", [44]]]]]]]]], [22, [1, [15, "l"], [2, [15, "e"], "getItem", [7, [15, "i"]]]], [46, [2, [15, "a"], "gtmOnSuccess", [7]], [36]]], [52, "m", ["require", "internal.addDataLayerEventListener"]], [52, "n", ["require", "internal.enableAutoEventOnScroll"]], [52, "o", ["require", "internal.getDestinationIds"]], [52, "p", ["require", "internal.sendGtagEvent"]], [52, "q", ["n", [8, "verticalThresholdUnits", "PERCENT", "verticalThresholds", 90]]], [22, [28, [15, "q"]], [46, [2, [15, "a"], "gtmOnFailure", [7]], [36]]], [2, [15, "e"], "setItem", [7, [15, "i"], true]], ["m", "gtm.scrollDepth", [51, "", [7, "s", "t"], ["t"], [52, "u", [8, "eventId", [16, [15, "s"], "gtm.uniqueEventId"]]], [22, [28, [15, "l"]], [46, [53, [52, "w", [39, [28, [28, [17, [15, "a"], "includeParams"]]], [8, "percent_scrolled", [16, [15, "s"], "gtm.scrollThreshold"]], [8]]], ["p", [15, "k"], [15, "h"], [15, "w"], [15, "u"]], [36]]]], [52, "v", [8, "percent_scrolled", [16, [15, "s"], "gtm.scrollThreshold"]]], ["r", [15, "u"]], ["p", ["o"], [15, "h"], [15, "v"], [15, "u"]]], [15, "q"]], [2, [15, "a"], "gtmOnSuccess", [7]]], [50, "__ccd_em_site_search", [46, "a"], [50, "e", [46, "j"], [52, "k", [2, [30, [15, "j"], ""], "split", [7, ","]]], [53, [41, "l"], [3, "l", 0], [63, [7, "l"], [23, [15, "l"], [17, [15, "k"], "length"]], [33, [15, "l"], [3, "l", [0, [15, "l"], 1]]], [46, [53, [52, "m", ["b", [2, [16, [15, "k"], [15, "l"]], "trim", [7]]]], [22, [21, [15, "m"], [44]], [46, [36, [15, "m"]]]]]]]]], [50, "f", [46, "j", "k"], [52, "l", [8, "search_term", [15, "j"]]], [52, "m", [2, [30, [15, "k"], ""], "split", [7, ","]]], [53, [41, "n"], [3, "n", 0], [63, [7, "n"], [23, [15, "n"], [17, [15, "m"], "length"]], [33, [15, "n"], [3, "n", [0, [15, "n"], 1]]], [46, [53, [52, "o", [2, [16, [15, "m"], [15, "n"]], "trim", [7]]], [52, "p", ["b", [15, "o"]]], [22, [21, [15, "p"], [44]], [46, [43, [15, "l"], [0, "q_", [15, "o"]], [15, "p"]]]]]]]], [36, [15, "l"]]], [52, "b", ["require", "getQueryParameters"]], [52, "c", ["require", "internal.sendGtagEvent"]], [52, "d", ["require", "getContainerVersion"]], [52, "g", ["e", [17, [15, "a"], "searchQueryParams"]]], [52, "h", [30, [17, [15, "a"], "instanceDestinationId"], [17, ["d"], "containerId"]]], [52, "i", [8, "deferrable", true, "eventId", [17, [15, "a"], "gtmEventId"]]], [22, [15, "g"], [46, [53, [52, "j", [39, [28, [28, [17, [15, "a"], "includeParams"]]], ["f", [15, "g"], [17, [15, "a"], "additionalQueryParams"]], [8]]], ["c", [15, "h"], "view_search_results", [15, "j"], [15, "i"]]]]], [2, [15, "a"], "gtmOnSuccess", [7]]], [50, "__ccd_em_video", [46, "a"], [50, "t", [46, "u"], [52, "v", [8]], [43, [15, "v"], [15, "l"], true], [43, [15, "v"], [15, "f"], true], [43, [15, "u"], "eventMetadata", [15, "v"]]], [52, "b", [13, [41, "$0"], [3, "$0", ["require", "internal.getFlags"]], ["$0"]]], [52, "c", ["require", "internal.getProductSettingsParameter"]], [52, "d", ["require", "internal.registerCcdCallback"]], [52, "e", ["require", "templateStorage"]], [52, "f", "speculative"], [52, "g", "ae_block_video"], [52, "h", "video_start"], [52, "i", "video_progress"], [52, "j", "video_complete"], [52, "k", "isRegistered"], [52, "l", "em_event"], [52, "m", [17, [15, "a"], "instanceDestinationId"]], [22, ["c", [15, "m"], [15, "g"]], [46, [2, [15, "a"], "gtmOnSuccess", [7]], [36]]], [52, "n", [28, [28, [16, [15, "b"], "enableCcdEnhancedMeasurement"]]]], [22, [15, "n"], [46, ["d", [15, "m"], [51, "", [7, "u"], [52, "v", [2, [15, "u"], "getEventName", [7]]], [52, "w", [30, [30, [20, [15, "v"], [15, "h"]], [20, [15, "v"], [15, "i"]]], [20, [15, "v"], [15, "j"]]]], [22, [30, [28, [15, "w"]], [28, [2, [15, "u"], "getMetadata", [7, [15, "l"]]]]], [46, [36]]], [22, ["c", [15, "m"], [15, "g"]], [46, [2, [15, "u"], "abort", [7]], [36]]], [2, [15, "u"], "setMetadata", [7, [15, "f"], false]], [22, [28, [17, [15, "a"], "includeParams"]], [46, [2, [15, "u"], "setHitData", [7, "video_current_time", [44]]], [2, [15, "u"], "setHitData", [7, "video_duration", [44]]], [2, [15, "u"], "setHitData", [7, "video_percent", [44]]], [2, [15, "u"], "setHitData", [7, "video_provider", [44]]], [2, [15, "u"], "setHitData", [7, "video_title", [44]]], [2, [15, "u"], "setHitData", [7, "video_url", [44]]], [2, [15, "u"], "setHitData", [7, "visible", [44]]]]]]]]], [22, [1, [15, "n"], [2, [15, "e"], "getItem", [7, [15, "k"]]]], [46, [2, [15, "a"], "gtmOnSuccess", [7]], [36]]], [52, "o", ["require", "internal.addDataLayerEventListener"]], [52, "p", ["require", "internal.enableAutoEventOnYouTubeActivity"]], [52, "q", ["require", "internal.getDestinationIds"]], [52, "r", ["require", "internal.sendGtagEvent"]], [52, "s", ["p", [8, "captureComplete", true, "captureStart", true, "progressThresholdsPercent", [7, 10, 25, 50, 75]]]], [22, [28, [15, "s"]], [46, [2, [15, "a"], "gtmOnFailure", [7]], [36]]], [2, [15, "e"], "setItem", [7, [15, "k"], true]], ["o", "gtm.video", [51, "", [7, "u", "v"], ["v"], [52, "w", [16, [15, "u"], "gtm.videoStatus"]], [41, "x"], [22, [20, [15, "w"], "start"], [46, [3, "x", [15, "h"]]], [46, [22, [20, [15, "w"], "progress"], [46, [3, "x", [15, "i"]]], [46, [22, [20, [15, "w"], "complete"], [46, [3, "x", [15, "j"]]], [46, [36]]]]]]], [52, "y", [39, [30, [28, [28, [17, [15, "a"], "includeParams"]]], [15, "n"]], [8, "video_current_time", [16, [15, "u"], "gtm.videoCurrentTime"], "video_duration", [16, [15, "u"], "gtm.videoDuration"], "video_percent", [16, [15, "u"], "gtm.videoPercent"], "video_provider", [16, [15, "u"], "gtm.videoProvider"], "video_title", [16, [15, "u"], "gtm.videoTitle"], "video_url", [16, [15, "u"], "gtm.videoUrl"], "visible", [16, [15, "u"], "gtm.videoVisible"]], [8]]], [52, "z", [8, "eventId", [16, [15, "u"], "gtm.uniqueEventId"]]], [22, [15, "n"], [46, ["t", [15, "z"]], ["r", ["q"], [15, "x"], [15, "y"], [15, "z"]]], [46, ["r", [15, "m"], [15, "x"], [15, "y"], [15, "z"]]]]], [15, "s"]], [2, [15, "a"], "gtmOnSuccess", [7]]], [50, "__ccd_ga_regscope", [46, "a"], [50, "k", [46, "m"], [22, [30, [28, [15, "i"]], [21, [17, [15, "i"], "length"], 2]], [46, [36, false]]], [52, "n", ["l", [15, "m"]]], [53, [41, "o"], [3, "o", 0], [63, [7, "o"], [23, [15, "o"], [17, [15, "n"], "length"]], [33, [15, "o"], [3, "o", [0, [15, "o"], 1]]], [46, [53, [52, "p", [16, [15, "n"], [15, "o"]]], [52, "q", [17, [15, "p"], "countryCode"]], [52, "r", [17, [15, "p"], "regionCode"]], [52, "s", [20, [15, "q"], [15, "i"]]], [52, "t", [30, [28, [15, "r"]], [20, [15, "r"], [15, "j"]]]], [22, [1, [15, "s"], [15, "t"]], [46, [36, true]]]]]]], [36, false]], [50, "l", [46, "m"], [52, "n", [7]], [22, [28, [15, "m"]], [46, [36, [15, "n"]]]], [52, "o", [2, [15, "m"], "split", [7, ","]]], [53, [41, "p"], [3, "p", 0], [63, [7, "p"], [23, [15, "p"], [17, [15, "o"], "length"]], [33, [15, "p"], [3, "p", [0, [15, "p"], 1]]], [46, [53, [52, "q", [2, [16, [15, "o"], [15, "p"]], "trim", [7]]], [22, [28, [15, "q"]], [46, [6]]], [52, "r", [2, [15, "q"], "split", [7, "-"]]], [52, "s", [16, [15, "r"], 0]], [52, "t", [39, [20, [17, [15, "r"], "length"], 2], [15, "q"], [44]]], [22, [30, [28, [15, "s"]], [21, [17, [15, "s"], "length"], 2]], [46, [6]]], [22, [1, [21, [15, "t"], [44]], [30, [23, [17, [15, "t"], "length"], 4], [18, [17, [15, "t"], "length"], 6]]], [46, [6]]], [2, [15, "n"], "push", [7, [8, "countryCode", [15, "s"], "regionCode", [15, "t"]]]]]]]], [36, [15, "n"]]], [52, "b", ["require", "getContainerVersion"]], [52, "c", ["require", "internal.setRemoteConfigParameter"]], [52, "d", ["require", "internal.getCountryCode"]], [52, "e", ["require", "internal.getRegionCode"]], [22, [28, [17, [15, "a"], "settingsTable"]], [46, [2, [15, "a"], "gtmOnSuccess", [7]], [36]]], [41, "f"], [52, "g", [8, "GOOGLE_SIGNALS", [7, [8, "name", "allow_google_signals", "value", false]], "DEVICE_AND_GEO", [7, [8, "name", "geo_granularity", "value", true], [8, "name", "redact_device_info", "value", true]]]], [52, "h", [30, [17, [15, "a"], "instanceDestinationId"], [17, ["b"], "containerId"]]], [52, "i", ["d"]], [52, "j", ["e"]], [53, [41, "m"], [3, "m", 0], [63, [7, "m"], [23, [15, "m"], [17, [17, [15, "a"], "settingsTable"], "length"]], [33, [15, "m"], [3, "m", [0, [15, "m"], 1]]], [46, [53, [52, "n", [16, [17, [15, "a"], "settingsTable"], [15, "m"]]], [22, [30, [17, [15, "n"], "disallowAllRegions"], ["k", [17, [15, "n"], "disallowedRegions"]]], [46, [53, [52, "o", [16, [15, "g"], [17, [15, "n"], "redactFieldGroup"]]], [22, [28, [15, "o"]], [46, [6]]], [53, [41, "p"], [3, "p", 0], [63, [7, "p"], [23, [15, "p"], [17, [15, "o"], "length"]], [33, [15, "p"], [3, "p", [0, [15, "p"], 1]]], [46, [53, [52, "q", [16, [15, "o"], [15, "p"]]], ["c", [15, "h"], [17, [15, "q"], "name"], [17, [15, "q"], "value"]]]]]]]]]]]]], [2, [15, "a"], "gtmOnSuccess", [7]]], [50, "__ogt_google_signals", [46, "a"], [52, "b", ["require", "internal.setProductSettingsParameter"]], [52, "c", ["require", "getContainerVersion"]], [52, "d", [13, [41, "$0"], [3, "$0", ["require", "internal.getFlags"]], ["$0"]]], [52, "e", [30, [17, [15, "a"], "instanceDestinationId"], [17, ["c"], "containerId"]]], ["b", [15, "e"], "google_signals", [20, [17, [15, "a"], "serverMacroResult"], 1]], [22, [17, [15, "d"], "enableGa4OnoRemarketing"], [46, ["b", [15, "e"], "google_ono", [20, [17, [15, "a"], "serverMacroResult"], 2]]]], [2, [15, "a"], "gtmOnSuccess", [7]]], [50, "__set_product_settings", [46, "a"], [52, "b", ["require", "internal.setProductSettingsParameter"]], [52, "c", ["require", "getContainerVersion"]], [52, "d", [30, [17, [15, "a"], "instanceDestinationId"], [17, ["c"], "containerId"]]], ["b", [15, "d"], "google_tld", [17, [15, "a"], "foreignTldMacroResult"]], ["b", [15, "d"], "ga_restrict_domain", [20, [17, [15, "a"], "isChinaVipRegionMacroResult"], 1]], [2, [15, "a"], "gtmOnSuccess", [7]]]],
        "permissions": {
            "__ccd_conversion_marking": {
                "read_container_data": {}
            },
            "__ccd_em_download": {
                "listen_data_layer": {
                    "accessType": "specific",
                    "allowedEvents": ["gtm.linkClick"]
                },
                "process_dom_events": {
                    "targets": [{
                        "targetType": "document",
                        "eventName": "click"
                    }, {
                        "targetType": "document",
                        "eventName": "auxclick"
                    }]
                },
                "access_template_storage": {}
            },
            "__ccd_em_outbound_click": {
                "get_url": {
                    "urlParts": "any",
                    "queriesAllowed": "any"
                },
                "listen_data_layer": {
                    "accessType": "specific",
                    "allowedEvents": ["gtm.linkClick"]
                },
                "process_dom_events": {
                    "targets": [{
                        "targetType": "document",
                        "eventName": "click"
                    }, {
                        "targetType": "document",
                        "eventName": "auxclick"
                    }]
                },
                "access_template_storage": {}
            },
            "__ccd_em_page_view": {
                "listen_data_layer": {
                    "accessType": "specific",
                    "allowedEvents": ["gtm.historyChange-v2"]
                },
                "process_dom_events": {
                    "targets": [{
                        "targetType": "window",
                        "eventName": "pushstate"
                    }, {
                        "targetType": "window",
                        "eventName": "popstate"
                    }]
                },
                "access_template_storage": {}
            },
            "__ccd_em_scroll": {
                "listen_data_layer": {
                    "accessType": "specific",
                    "allowedEvents": ["gtm.scrollDepth"]
                },
                "process_dom_events": {
                    "targets": [{
                        "targetType": "window",
                        "eventName": "resize"
                    }, {
                        "targetType": "window",
                        "eventName": "scroll"
                    }]
                },
                "access_template_storage": {}
            },
            "__ccd_em_site_search": {
                "get_url": {
                    "urlParts": "any",
                    "queriesAllowed": "any"
                },
                "read_container_data": {}
            },
            "__ccd_em_video": {
                "listen_data_layer": {
                    "accessType": "specific",
                    "allowedEvents": ["gtm.video"]
                },
                "process_dom_events": {
                    "targets": [{
                        "targetType": "element",
                        "eventName": "onStateChange"
                    }, {
                        "targetType": "element",
                        "eventName": "onPlaybackRateChange"
                    }]
                },
                "access_template_storage": {}
            },
            "__ccd_ga_regscope": {
                "read_container_data": {}
            },
            "__ogt_google_signals": {
                "read_container_data": {}
            },
            "__set_product_settings": {
                "read_container_data": {}
            }
        }
        ,
        "security_groups": {
            "google": ["__ccd_conversion_marking", "__ccd_em_download", "__ccd_em_outbound_click", "__ccd_em_page_view", "__ccd_em_scroll", "__ccd_em_site_search", "__ccd_em_video", "__ccd_ga_regscope", "__ogt_google_signals", "__set_product_settings"]
        },
        "infra": ["__ccd_conversion_marking", "__ccd_em_download", "__ccd_em_outbound_click", "__ccd_em_page_view", "__ccd_em_scroll", "__ccd_em_site_search", "__ccd_em_video", "__ccd_ga_regscope", "__ogt_google_signals", "__set_product_settings"]

    };

    /*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
    var ca, da = function(a) {
        var b = 0;
        return function() {
            return b < a.length ? {
                done: !1,
                value: a[b++]
            } : {
                done: !0
            }
        }
    }, ea = function(a) {
        return a.raw = a
    }, ha = "function" == typeof Object.create ? Object.create : function(a) {
        var b = function() {};
        b.prototype = a;
        return new b
    }
    , ia;
    if ("function" == typeof Object.setPrototypeOf)
        ia = Object.setPrototypeOf;
    else {
        var ja;
        a: {
            var la = {
                a: !0
            }
              , ma = {};
            try {
                ma.__proto__ = la;
                ja = ma.a;
                break a
            } catch (a) {}
            ja = !1
        }
        ia = ja ? function(a, b) {
            a.__proto__ = b;
            if (a.__proto__ !== b)
                throw new TypeError(a + " is not extensible");
            return a
        }
        : null
    }
    var na = ia
      , pa = function(a, b) {
        a.prototype = ha(b.prototype);
        a.prototype.constructor = a;
        if (na)
            na(a, b);
        else
            for (var c in b)
                if ("prototype" != c)
                    if (Object.defineProperties) {
                        var d = Object.getOwnPropertyDescriptor(b, c);
                        d && Object.defineProperty(a, c, d)
                    } else
                        a[c] = b[c];
        a.Kl = b.prototype
    }
      , qa = this || self
      , ra = function(a) {
        return a
    };
    var sa = function(a, b) {
        this.h = a;
        this.m = b
    };
    var ta = function(a) {
        return "number" === typeof a && 0 <= a && isFinite(a) && 0 === a % 1 || "string" === typeof a && "-" !== a[0] && a === "" + parseInt(a, 10)
    }
      , ua = function() {
        this.B = {};
        this.D = !1;
        this.K = {}
    }
      , va = function(a, b) {
        var c = [], d;
        for (d in a.B)
            if (a.B.hasOwnProperty(d))
                switch (d = d.substr(5),
                b) {
                case 1:
                    c.push(d);
                    break;
                case 2:
                    c.push(a.get(d));
                    break;
                case 3:
                    c.push([d, a.get(d)])
                }
        return c
    };
    ua.prototype.get = function(a) {
        return this.B["dust." + a]
    }
    ;
    ua.prototype.set = function(a, b) {
        this.D || (a = "dust." + a,
        this.K.hasOwnProperty(a) || (this.B[a] = b))
    }
    ;
    ua.prototype.has = function(a) {
        return this.B.hasOwnProperty("dust." + a)
    }
    ;
    var wa = function(a, b) {
        b = "dust." + b;
        a.D || a.K.hasOwnProperty(b) || delete a.B[b]
    };
    ua.prototype.Nb = function() {
        this.D = !0
    }
    ;
    ua.prototype.Ee = function() {
        return this.D
    }
    ;
    var xa = function(a) {
        this.m = new ua;
        this.h = [];
        this.B = !1;
        a = a || [];
        for (var b in a)
            a.hasOwnProperty(b) && (ta(b) ? this.h[Number(b)] = a[Number(b)] : this.m.set(b, a[b]))
    };
    ca = xa.prototype;
    ca.toString = function(a) {
        if (a && 0 <= a.indexOf(this))
            return "";
        for (var b = [], c = 0; c < this.h.length; c++) {
            var d = this.h[c];
            null === d || void 0 === d ? b.push("") : d instanceof xa ? (a = a || [],
            a.push(this),
            b.push(d.toString(a)),
            a.pop()) : b.push(d.toString())
        }
        return b.join(",")
    }
    ;
    ca.set = function(a, b) {
        if (!this.B)
            if ("length" === a) {
                if (!ta(b))
                    throw Error("RangeError: Length property must be a valid integer.");
                this.h.length = Number(b)
            } else
                ta(a) ? this.h[Number(a)] = b : this.m.set(a, b)
    }
    ;
    ca.get = function(a) {
        return "length" === a ? this.length() : ta(a) ? this.h[Number(a)] : this.m.get(a)
    }
    ;
    ca.length = function() {
        return this.h.length
    }
    ;
    ca.xb = function() {
        for (var a = va(this.m, 1), b = 0; b < this.h.length; b++)
            a.push(b + "");
        return new xa(a)
    }
    ;
    var ya = function(a, b) {
        ta(b) ? delete a.h[Number(b)] : wa(a.m, b)
    };
    ca = xa.prototype;
    ca.pop = function() {
        return this.h.pop()
    }
    ;
    ca.push = function(a) {
        return this.h.push.apply(this.h, Array.prototype.slice.call(arguments))
    }
    ;
    ca.shift = function() {
        return this.h.shift()
    }
    ;
    ca.splice = function(a, b, c) {
        return new xa(this.h.splice.apply(this.h, arguments))
    }
    ;
    ca.unshift = function(a) {
        return this.h.unshift.apply(this.h, Array.prototype.slice.call(arguments))
    }
    ;
    ca.has = function(a) {
        return ta(a) && this.h.hasOwnProperty(a) || this.m.has(a)
    }
    ;
    ca.Nb = function() {
        this.B = !0;
        Object.freeze(this.h);
        this.m.Nb()
    }
    ;
    ca.Ee = function() {
        return this.B
    }
    ;
    var za = function() {
        this.quota = {}
    };
    za.prototype.reset = function() {
        this.quota = {}
    }
    ;
    var Aa = function(a, b) {
        this.R = a;
        this.K = function(c, d, e) {
            return c.apply(d, e)
        }
        ;
        this.B = b;
        this.m = new ua;
        this.h = this.D = void 0
    };
    Aa.prototype.add = function(a, b) {
        Ba(this, a, b, !1)
    }
    ;
    var Ba = function(a, b, c, d) {
        if (!a.m.Ee())
            if (d) {
                var e = a.m;
                e.set(b, c);
                e.K["dust." + b] = !0
            } else
                a.m.set(b, c)
    };
    Aa.prototype.set = function(a, b) {
        this.m.Ee() || (!this.m.has(a) && this.B && this.B.has(a) ? this.B.set(a, b) : this.m.set(a, b))
    }
    ;
    Aa.prototype.get = function(a) {
        return this.m.has(a) ? this.m.get(a) : this.B ? this.B.get(a) : void 0
    }
    ;
    Aa.prototype.has = function(a) {
        return !!this.m.has(a) || !(!this.B || !this.B.has(a))
    }
    ;
    var Ca = function(a) {
        var b = new Aa(a.R,a);
        a.D && (b.D = a.D);
        b.K = a.K;
        b.h = a.h;
        return b
    };
    var Da = function() {}
      , Ea = function(a) {
        return "function" === typeof a
    }
      , k = function(a) {
        return "string" === typeof a
    }
      , Ha = function(a) {
        return "number" === typeof a && !isNaN(a)
    }
      , Ia = Array.isArray
      , Ka = function(a, b) {
        if (a && Ia(a))
            for (var c = 0; c < a.length; c++)
                if (a[c] && b(a[c]))
                    return a[c]
    }
      , La = function(a, b) {
        if (!Ha(a) || !Ha(b) || a > b)
            a = 0,
            b = 2147483647;
        return Math.floor(Math.random() * (b - a + 1) + a)
    }
      , Na = function(a, b) {
        for (var c = new Ma, d = 0; d < a.length; d++)
            c.set(a[d], !0);
        for (var e = 0; e < b.length; e++)
            if (c.get(b[e]))
                return !0;
        return !1
    }
      , m = function(a, b) {
        for (var c in a)
            Object.prototype.hasOwnProperty.call(a, c) && b(c, a[c])
    }
      , Oa = function(a) {
        return !!a && ("[object Arguments]" === Object.prototype.toString.call(a) || Object.prototype.hasOwnProperty.call(a, "callee"))
    }
      , Pa = function(a) {
        return Math.round(Number(a)) || 0
    }
      , Qa = function(a) {
        return "false" === String(a).toLowerCase() ? !1 : !!a
    }
      , Ra = function(a) {
        var b = [];
        if (Ia(a))
            for (var c = 0; c < a.length; c++)
                b.push(String(a[c]));
        return b
    }
      , Sa = function(a) {
        return a ? a.replace(/^\s+|\s+$/g, "") : ""
    }
      , Ta = function() {
        return new Date(Date.now())
    }
      , Ua = function() {
        return Ta().getTime()
    }
      , Ma = function() {
        this.prefix = "gtm.";
        this.values = {}
    };
    Ma.prototype.set = function(a, b) {
        this.values[this.prefix + a] = b
    }
    ;
    Ma.prototype.get = function(a) {
        return this.values[this.prefix + a]
    }
    ;
    var Wa = function(a, b, c) {
        return a && a.hasOwnProperty(b) ? a[b] : c
    }
      , Xa = function(a) {
        var b = a;
        return function() {
            if (b) {
                var c = b;
                b = void 0;
                try {
                    c()
                } catch (d) {}
            }
        }
    }
      , Ya = function(a, b) {
        for (var c in b)
            b.hasOwnProperty(c) && (a[c] = b[c])
    }
      , Za = function(a) {
        for (var b in a)
            if (a.hasOwnProperty(b))
                return !0;
        return !1
    }
      , $a = function(a, b) {
        for (var c = [], d = 0; d < a.length; d++)
            c.push(a[d]),
            c.push.apply(c, b[a[d]] || []);
        return c
    }
      , ab = function(a, b) {
        var c = z;
        b = b || [];
        for (var d = c, e = 0; e < a.length - 1; e++) {
            if (!d.hasOwnProperty(a[e]))
                return;
            d = d[a[e]];
            if (0 <= b.indexOf(d))
                return
        }
        return d
    }
      , cb = function(a, b) {
        for (var c = {}, d = c, e = a.split("."), f = 0; f < e.length - 1; f++)
            d = d[e[f]] = {};
        d[e[e.length - 1]] = b;
        return c
    }
      , db = /^\w{1,9}$/
      , eb = function(a, b) {
        a = a || {};
        b = b || ",";
        var c = [];
        m(a, function(d, e) {
            db.test(d) && e && c.push(d)
        });
        return c.join(b)
    }
      , fb = function(a, b) {
        function c() {
            ++d === b && (e(),
            e = null,
            c.done = !0)
        }
        var d = 0
          , e = a;
        c.done = !1;
        return c
    };
    var gb = function(a, b) {
        ua.call(this);
        this.R = a;
        this.ab = b
    };
    pa(gb, ua);
    gb.prototype.toString = function() {
        return this.R
    }
    ;
    gb.prototype.xb = function() {
        return new xa(va(this, 1))
    }
    ;
    gb.prototype.h = function(a, b) {
        return this.ab.apply(new hb(this,a), Array.prototype.slice.call(arguments, 1))
    }
    ;
    gb.prototype.m = function(a, b) {
        try {
            return this.h.apply(this, Array.prototype.slice.call(arguments, 0))
        } catch (c) {}
    }
    ;
    var jb = function(a, b) {
        for (var c, d = 0; d < b.length && !(c = ib(a, b[d]),
        c instanceof sa); d++)
            ;
        return c
    }
      , ib = function(a, b) {
        try {
            var c = a.get(String(b[0]));
            if (!(c && c instanceof gb))
                throw Error("Attempting to execute non-function " + b[0] + ".");
            return c.h.apply(c, [a].concat(b.slice(1)))
        } catch (e) {
            var d = a.D;
            d && d(e, b.context ? {
                id: b[0],
                line: b.context.line
            } : null);
            throw e;
        }
    }
      , hb = function(a, b) {
        this.m = a;
        this.h = b
    }
      , E = function(a, b) {
        return Ia(b) ? ib(a.h, b) : b
    }
      , F = function(a) {
        return a.m.R
    };
    var kb = function() {
        ua.call(this)
    };
    pa(kb, ua);
    kb.prototype.xb = function() {
        return new xa(va(this, 1))
    }
    ;
    var lb = {
        map: function(a) {
            for (var b = new kb, c = 0; c < arguments.length - 1; c += 2) {
                var d = E(this, arguments[c]) + ""
                  , e = E(this, arguments[c + 1]);
                b.set(d, e)
            }
            return b
        },
        list: function(a) {
            for (var b = new xa, c = 0; c < arguments.length; c++) {
                var d = E(this, arguments[c]);
                b.push(d)
            }
            return b
        },
        fn: function(a, b, c) {
            var d = this.h
              , e = E(this, b);
            if (!(e instanceof xa))
                throw Error("Error: non-List value given for Fn argument names.");
            var f = Array.prototype.slice.call(arguments, 2);
            return new gb(a,function() {
                return function(g) {
                    var h = Ca(d);
                    void 0 === h.h && (h.h = this.h.h);
                    for (var l = Array.prototype.slice.call(arguments, 0), n = 0; n < l.length; n++)
                        if (l[n] = E(this, l[n]),
                        l[n]instanceof sa)
                            return l[n];
                    for (var p = e.get("length"), q = 0; q < p; q++)
                        q < l.length ? h.add(e.get(q), l[q]) : h.add(e.get(q), void 0);
                    h.add("arguments", new xa(l));
                    var r = jb(h, f);
                    if (r instanceof sa)
                        return "return" === r.h ? r.m : r
                }
            }())
        },
        control: function(a, b) {
            return new sa(a,E(this, b))
        },
        undefined: function() {}
    };
    var mb = function() {
        this.B = new za;
        this.h = new Aa(this.B)
    }
      , nb = function(a, b, c) {
        var d = new gb(b,c);
        d.Nb();
        a.h.set(b, d)
    }
      , ob = function(a, b, c) {
        lb.hasOwnProperty(b) && nb(a, c || b, lb[b])
    };
    mb.prototype.execute = function(a, b) {
        var c = Array.prototype.slice.call(arguments, 0);
        return this.m(c)
    }
    ;
    mb.prototype.m = function(a) {
        for (var b, c = 0; c < arguments.length; c++)
            b = ib(this.h, arguments[c]);
        return b
    }
    ;
    mb.prototype.D = function(a, b) {
        var c = Ca(this.h);
        c.h = a;
        for (var d, e = 1; e < arguments.length; e++)
            d = ib(c, arguments[e]);
        return d
    }
    ;
    function pb() {
        for (var a = qb, b = {}, c = 0; c < a.length; ++c)
            b[a[c]] = c;
        return b
    }
    function rb() {
        var a = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        a += a.toLowerCase() + "0123456789-_";
        return a + "."
    }
    var qb, sb;
    function tb(a) {
        qb = qb || rb();
        sb = sb || pb();
        for (var b = [], c = 0; c < a.length; c += 3) {
            var d = c + 1 < a.length
              , e = c + 2 < a.length
              , f = a.charCodeAt(c)
              , g = d ? a.charCodeAt(c + 1) : 0
              , h = e ? a.charCodeAt(c + 2) : 0
              , l = f >> 2
              , n = (f & 3) << 4 | g >> 4
              , p = (g & 15) << 2 | h >> 6
              , q = h & 63;
            e || (q = 64,
            d || (p = 64));
            b.push(qb[l], qb[n], qb[p], qb[q])
        }
        return b.join("")
    }
    function ub(a) {
        function b(l) {
            for (; d < a.length; ) {
                var n = a.charAt(d++)
                  , p = sb[n];
                if (null != p)
                    return p;
                if (!/^[\s\xa0]*$/.test(n))
                    throw Error("Unknown base64 encoding at char: " + n);
            }
            return l
        }
        qb = qb || rb();
        sb = sb || pb();
        for (var c = "", d = 0; ; ) {
            var e = b(-1)
              , f = b(0)
              , g = b(64)
              , h = b(64);
            if (64 === h && -1 === e)
                return c;
            c += String.fromCharCode(e << 2 | f >> 4);
            64 != g && (c += String.fromCharCode(f << 4 & 240 | g >> 2),
            64 != h && (c += String.fromCharCode(g << 6 & 192 | h)))
        }
    }
    ;var vb = {}
      , wb = function(a, b) {
        vb[a] = vb[a] || [];
        vb[a][b] = !0
    }
      , xb = function() {
        delete vb.GA4_EVENT
    }
      , yb = function(a) {
        var b = vb[a];
        if (!b || 0 === b.length)
            return "";
        for (var c = [], d = 0, e = 0; e < b.length; e++)
            0 === e % 8 && 0 < e && (c.push(String.fromCharCode(d)),
            d = 0),
            b[e] && (d |= 1 << e % 8);
        0 < d && c.push(String.fromCharCode(d));
        return tb(c.join("")).replace(/\.+$/, "")
    };
    var zb = Array.prototype.indexOf ? function(a, b) {
        return Array.prototype.indexOf.call(a, b, void 0)
    }
    : function(a, b) {
        if ("string" === typeof a)
            return "string" !== typeof b || 1 != b.length ? -1 : a.indexOf(b, 0);
        for (var c = 0; c < a.length; c++)
            if (c in a && a[c] === b)
                return c;
        return -1
    }
    ;
    var Ab, Bb = function() {
        if (void 0 === Ab) {
            var a = null
              , b = qa.trustedTypes;
            if (b && b.createPolicy) {
                try {
                    a = b.createPolicy("goog#html", {
                        createHTML: ra,
                        createScript: ra,
                        createScriptURL: ra
                    })
                } catch (c) {
                    qa.console && qa.console.error(c.message)
                }
                Ab = a
            } else
                Ab = a
        }
        return Ab
    };
    var Db = function(a, b) {
        this.h = b === Cb ? a : ""
    };
    Db.prototype.toString = function() {
        return this.h + ""
    }
    ;
    var Eb = function(a) {
        return a instanceof Db && a.constructor === Db ? a.h : "type_error:TrustedResourceUrl"
    }
      , Cb = {}
      , Fb = function(a) {
        var b = a
          , c = Bb()
          , d = c ? c.createScriptURL(b) : b;
        return new Db(d,Cb)
    };
    var Gb = /^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;
    var Hb, Ib;
    a: {
        for (var Jb = ["CLOSURE_FLAGS"], Kb = qa, Lb = 0; Lb < Jb.length; Lb++)
            if (Kb = Kb[Jb[Lb]],
            null == Kb) {
                Ib = null;
                break a
            }
        Ib = Kb
    }
    var Mb = Ib && Ib[610401301];
    Hb = null != Mb ? Mb : !1;
    function Nb() {
        var a = qa.navigator;
        if (a) {
            var b = a.userAgent;
            if (b)
                return b
        }
        return ""
    }
    var Ob, Pb = qa.navigator;
    Ob = Pb ? Pb.userAgentData || null : null;
    function Qb(a) {
        return Hb ? Ob ? Ob.brands.some(function(b) {
            var c = b.brand;
            return c && -1 != c.indexOf(a)
        }) : !1 : !1
    }
    function Rb(a) {
        return -1 != Nb().indexOf(a)
    }
    ;function Sb() {
        return Hb ? !!Ob && 0 < Ob.brands.length : !1
    }
    function Tb() {
        return Sb() ? !1 : Rb("Opera")
    }
    function Ub() {
        return Rb("Firefox") || Rb("FxiOS")
    }
    function Vb() {
        return Sb() ? Qb("Chromium") : (Rb("Chrome") || Rb("CriOS")) && !(Sb() ? 0 : Rb("Edge")) || Rb("Silk")
    }
    ;var Wb = {}
      , Xb = function(a, b) {
        this.h = b === Wb ? a : ""
    };
    Xb.prototype.toString = function() {
        return this.h.toString()
    }
    ;
    /*

 SPDX-License-Identifier: Apache-2.0
*/
    var Yb = {};
    var Zb = function() {}
      , $b = function(a) {
        this.h = a
    };
    pa($b, Zb);
    $b.prototype.toString = function() {
        return this.h
    }
    ;
    function ac(a, b) {
        if (void 0 !== a.tagName) {
            if ("script" === a.tagName.toLowerCase())
                throw Error("");
            if ("style" === a.tagName.toLowerCase())
                throw Error("");
        }
        a.innerHTML = b instanceof Xb && b.constructor === Xb ? b.h : "type_error:SafeHtml"
    }
    function bc(a, b) {
        var c = [new $b(cc[0].toLowerCase(),Yb)];
        if (0 === c.length)
            throw Error("");
        var d = c.map(function(f) {
            var g;
            if (f instanceof $b)
                g = f.h;
            else
                throw Error("");
            return g
        })
          , e = b.toLowerCase();
        if (d.every(function(f) {
            return 0 !== e.indexOf(f)
        }))
            throw Error('Attribute "' + b + '" does not match any of the allowed prefixes.');
        a.setAttribute(b, "true")
    }
    ;function dc(a) {
        var b = a = ec(a)
          , c = Bb()
          , d = c ? c.createHTML(b) : b;
        return new Xb(d,Wb)
    }
    function ec(a) {
        return null === a ? "null" : void 0 === a ? "undefined" : a
    }
    ;var z = window
      , H = document
      , fc = navigator
      , gc = H.currentScript && H.currentScript.src
      , hc = function(a, b) {
        var c = z[a];
        z[a] = void 0 === c ? b : c;
        return z[a]
    }
      , ic = function(a, b) {
        b && (a.addEventListener ? a.onload = b : a.onreadystatechange = function() {
            a.readyState in {
                loaded: 1,
                complete: 1
            } && (a.onreadystatechange = null,
            b())
        }
        )
    }
      , jc = {
        async: 1,
        nonce: 1,
        onerror: 1,
        onload: 1,
        src: 1,
        type: 1
    }
      , kc = {
        onload: 1,
        src: 1,
        width: 1,
        height: 1,
        style: 1
    };
    function lc(a, b, c) {
        b && m(b, function(d, e) {
            d = d.toLowerCase();
            c.hasOwnProperty(d) || a.setAttribute(d, e)
        })
    }
    var mc = function(a, b, c, d, e) {
        var f = H.createElement("script");
        lc(f, d, jc);
        f.type = "text/javascript";
        f.async = !0;
        var g;
        g = Fb(ec(a));
        f.src = Eb(g);
        var h, l, n, p = null == (n = (l = (f.ownerDocument && f.ownerDocument.defaultView || window).document).querySelector) ? void 0 : n.call(l, "script[nonce]");
        (h = p ? p.nonce || p.getAttribute("nonce") || "" : "") && f.setAttribute("nonce", h);
        ic(f, b);
        c && (f.onerror = c);
        if (e)
            e.appendChild(f);
        else {
            var q = H.getElementsByTagName("script")[0] || H.body || H.head;
            q.parentNode.insertBefore(f, q)
        }
        return f
    }
      , nc = function() {
        if (gc) {
            var a = gc.toLowerCase();
            if (0 === a.indexOf("https://"))
                return 2;
            if (0 === a.indexOf("http://"))
                return 3
        }
        return 1
    }
      , oc = function(a, b, c, d, e) {
        var f;
        f = void 0 === f ? !0 : f;
        var g = e
          , h = !1;
        g || (g = H.createElement("iframe"),
        h = !0);
        lc(g, c, kc);
        d && m(d, function(n, p) {
            g.dataset[n] = p
        });
        f && (g.height = "0",
        g.width = "0",
        g.style.display = "none",
        g.style.visibility = "hidden");
        if (h) {
            var l = H.body && H.body.lastChild || H.body || H.head;
            l.parentNode.insertBefore(g, l)
        }
        ic(g, b);
        void 0 !== a && (g.src = a);
        return g
    }
      , pc = function(a, b, c, d) {
        var e = new Image(1,1);
        lc(e, d, {});
        e.onload = function() {
            e.onload = null;
            b && b()
        }
        ;
        e.onerror = function() {
            e.onerror = null;
            c && c()
        }
        ;
        e.src = a
    }
      , qc = function(a, b, c, d) {
        a.addEventListener ? a.addEventListener(b, c, !!d) : a.attachEvent && a.attachEvent("on" + b, c)
    }
      , rc = function(a, b, c) {
        a.removeEventListener ? a.removeEventListener(b, c, !1) : a.detachEvent && a.detachEvent("on" + b, c)
    }
      , J = function(a) {
        z.setTimeout(a, 0)
    }
      , sc = function(a, b) {
        return a && b && a.attributes && a.attributes[b] ? a.attributes[b].value : null
    }
      , tc = function(a) {
        var b = a.innerText || a.textContent || "";
        b && " " != b && (b = b.replace(/^[\s\xa0]+|[\s\xa0]+$/g, ""));
        b && (b = b.replace(/(\xa0+|\s{2,}|\n|\r\t)/g, " "));
        return b
    }
      , uc = function(a) {
        var b = H.createElement("div");
        ac(b, dc("A<div>" + a + "</div>"));
        b = b.lastChild;
        for (var c = []; b.firstChild; )
            c.push(b.removeChild(b.firstChild));
        return c
    }
      , vc = function(a, b, c) {
        c = c || 100;
        for (var d = {}, e = 0; e < b.length; e++)
            d[b[e]] = !0;
        for (var f = a, g = 0; f && g <= c; g++) {
            if (d[String(f.tagName).toLowerCase()])
                return f;
            f = f.parentElement
        }
        return null
    }
      , wc = function(a) {
        var b;
        try {
            b = fc.sendBeacon && fc.sendBeacon(a)
        } catch (c) {
            wb("TAGGING", 15)
        }
        b || pc(a)
    }
      , xc = function(a, b) {
        var c = a[b];
        c && "string" === typeof c.animVal && (c = c.animVal);
        return c
    }
      , yc = function() {
        var a = z.performance;
        if (a && Ea(a.now))
            return a.now()
    }
      , zc = function() {
        return z.performance || void 0
    };
    var Ac = function(a, b) {
        return E(this, a) && E(this, b)
    }
      , Bc = function(a, b) {
        return E(this, a) === E(this, b)
    }
      , Cc = function(a, b) {
        return E(this, a) || E(this, b)
    }
      , Dc = function(a, b) {
        a = E(this, a);
        b = E(this, b);
        return -1 < String(a).indexOf(String(b))
    }
      , Ec = function(a, b) {
        a = String(E(this, a));
        b = String(E(this, b));
        return a.substring(0, b.length) === b
    }
      , Fc = function(a, b) {
        a = E(this, a);
        b = E(this, b);
        switch (a) {
        case "pageLocation":
            var c = z.location.href;
            b instanceof kb && b.get("stripProtocol") && (c = c.replace(/^https?:\/\//, ""));
            return c
        }
    };
    var Hc = function() {
        this.h = new mb;
        Gc(this)
    };
    Hc.prototype.execute = function(a) {
        return this.h.m(a)
    }
    ;
    var Gc = function(a) {
        ob(a.h, "map");
        var b = function(c, d) {
            nb(a.h, c, d)
        };
        b("and", Ac);
        b("contains", Dc);
        b("equals", Bc);
        b("or", Cc);
        b("startsWith", Ec);
        b("variable", Fc)
    };
    var Ic = function() {
        this.map = new Map
    };
    Ic.prototype.set = function(a, b) {
        this.map.set(a, b)
    }
    ;
    Ic.prototype.get = function(a) {
        return this.map.get(a)
    }
    ;
    var Jc = function() {
        this.keys = [];
        this.values = []
    };
    Jc.prototype.set = function(a, b) {
        this.keys.push(a);
        this.values.push(b)
    }
    ;
    Jc.prototype.get = function(a) {
        var b = this.keys.indexOf(a);
        if (-1 < b)
            return this.values[b]
    }
    ;
    var Kc = function(a) {
        if (a instanceof Kc)
            return a;
        this.Na = a
    };
    Kc.prototype.toString = function() {
        return String(this.Na)
    }
    ;
    var Mc = function(a) {
        ua.call(this);
        this.h = a;
        this.set("then", Lc(this));
        this.set("catch", Lc(this, !0));
        this.set("finally", Lc(this, !1, !0))
    };
    pa(Mc, kb);
    var Lc = function(a, b, c) {
        b = void 0 === b ? !1 : b;
        c = void 0 === c ? !1 : c;
        return new gb("",function(d, e) {
            b && (e = d,
            d = void 0);
            c && (e = d);
            d instanceof gb || (d = void 0);
            e instanceof gb || (e = void 0);
            var f = Ca(this.h)
              , g = function(l) {
                return function(n) {
                    return c ? (l.h(f),
                    a.h) : l.h(f, n)
                }
            }
              , h = a.h.then(d && g(d), e && g(e));
            return new Mc(h)
        }
        )
    };
    /*
 jQuery (c) 2005, 2012 jQuery Foundation, Inc. jquery.org/license. */
    var Nc = /\[object (Boolean|Number|String|Function|Array|Date|RegExp)\]/
      , Oc = function(a) {
        if (null == a)
            return String(a);
        var b = Nc.exec(Object.prototype.toString.call(Object(a)));
        return b ? b[1].toLowerCase() : "object"
    }
      , Pc = function(a, b) {
        return Object.prototype.hasOwnProperty.call(Object(a), b)
    }
      , Qc = function(a) {
        if (!a || "object" != Oc(a) || a.nodeType || a == a.window)
            return !1;
        try {
            if (a.constructor && !Pc(a, "constructor") && !Pc(a.constructor.prototype, "isPrototypeOf"))
                return !1
        } catch (c) {
            return !1
        }
        for (var b in a)
            ;
        return void 0 === b || Pc(a, b)
    }
      , K = function(a, b) {
        var c = b || ("array" == Oc(a) ? [] : {}), d;
        for (d in a)
            if (Pc(a, d)) {
                var e = a[d];
                "array" == Oc(e) ? ("array" != Oc(c[d]) && (c[d] = []),
                c[d] = K(e, c[d])) : Qc(e) ? (Qc(c[d]) || (c[d] = {}),
                c[d] = K(e, c[d])) : c[d] = e
            }
        return c
    };
    var Sc = function(a, b, c) {
        var d = Map ? new Ic : new Jc
          , e = function(g, h) {
            for (var l = va(g, 1), n = 0; n < l.length; n++)
                h[l[n]] = f(g.get(l[n]))
        }
          , f = function(g) {
            var h = d.get(g);
            if (h)
                return h;
            if (g instanceof xa) {
                var l = [];
                d.set(g, l);
                for (var n = g.xb(), p = 0; p < n.length(); p++)
                    l[n.get(p)] = f(g.get(n.get(p)));
                return l
            }
            if (g instanceof Mc)
                return g.h;
            if (g instanceof kb) {
                var q = {};
                d.set(g, q);
                e(g, q);
                return q
            }
            if (g instanceof gb) {
                var r = function() {
                    for (var u = Array.prototype.slice.call(arguments, 0), v = 0; v < u.length; v++)
                        u[v] = Rc(u[v], b, c);
                    var w = new Aa(b ? b.R : new za);
                    b && (w.h = b.h);
                    return f(g.h.apply(g, [w].concat(u)))
                };
                d.set(g, r);
                e(g, r);
                return r
            }
            var t = !1;
            switch (c) {
            case 1:
                t = !0;
                break;
            case 2:
                t = !1;
                break;
            case 3:
                t = !1;
                break;
            default:
            }
            if (g instanceof Kc && t)
                return g.Na;
            switch (typeof g) {
            case "boolean":
            case "number":
            case "string":
            case "undefined":
                return g;
            case "object":
                if (null === g)
                    return null
            }
        };
        return f(a)
    }
      , Rc = function(a, b, c) {
        var d = Map ? new Ic : new Jc
          , e = function(g, h) {
            for (var l in g)
                g.hasOwnProperty(l) && h.set(l, f(g[l]))
        }
          , f = function(g) {
            var h = d.get(g);
            if (h)
                return h;
            if (Ia(g) || Oa(g)) {
                var l = new xa([]);
                d.set(g, l);
                for (var n in g)
                    g.hasOwnProperty(n) && l.set(n, f(g[n]));
                return l
            }
            if (Qc(g)) {
                var p = new kb;
                d.set(g, p);
                e(g, p);
                return p
            }
            if ("function" === typeof g) {
                var q = new gb("",function(x) {
                    for (var y = Array.prototype.slice.call(arguments, 0), A = 0; A < y.length; A++)
                        y[A] = Sc(E(this, y[A]), b, c);
                    return f((0,
                    this.h.K)(g, g, y))
                }
                );
                d.set(g, q);
                e(g, q);
                return q
            }
            var v = typeof g;
            if (null === g || "string" === v || "number" === v || "boolean" === v)
                return g;
            var w = !1;
            switch (c) {
            case 1:
                w = !0;
                break;
            case 2:
                w = !1;
                break;
            default:
            }
            if (void 0 !== g && w)
                return new Kc(g)
        };
        return f(a)
    };
    var Tc = function(a) {
        for (var b = [], c = 0; c < a.length(); c++)
            a.has(c) && (b[c] = a.get(c));
        return b
    }
      , Uc = function(a) {
        if (void 0 === a || Ia(a) || Qc(a))
            return !0;
        switch (typeof a) {
        case "boolean":
        case "number":
        case "string":
        case "function":
            return !0
        }
        return !1
    };
    var Vc = {
        supportedMethods: "concat every filter forEach hasOwnProperty indexOf join lastIndexOf map pop push reduce reduceRight reverse shift slice some sort splice unshift toString".split(" "),
        concat: function(a, b) {
            for (var c = [], d = 0; d < this.length(); d++)
                c.push(this.get(d));
            for (var e = 1; e < arguments.length; e++)
                if (arguments[e]instanceof xa)
                    for (var f = arguments[e], g = 0; g < f.length(); g++)
                        c.push(f.get(g));
                else
                    c.push(arguments[e]);
            return new xa(c)
        },
        every: function(a, b) {
            for (var c = this.length(), d = 0; d < this.length() && d < c; d++)
                if (this.has(d) && !b.h(a, this.get(d), d, this))
                    return !1;
            return !0
        },
        filter: function(a, b) {
            for (var c = this.length(), d = [], e = 0; e < this.length() && e < c; e++)
                this.has(e) && b.h(a, this.get(e), e, this) && d.push(this.get(e));
            return new xa(d)
        },
        forEach: function(a, b) {
            for (var c = this.length(), d = 0; d < this.length() && d < c; d++)
                this.has(d) && b.h(a, this.get(d), d, this)
        },
        hasOwnProperty: function(a, b) {
            return this.has(b)
        },
        indexOf: function(a, b, c) {
            var d = this.length()
              , e = void 0 === c ? 0 : Number(c);
            0 > e && (e = Math.max(d + e, 0));
            for (var f = e; f < d; f++)
                if (this.has(f) && this.get(f) === b)
                    return f;
            return -1
        },
        join: function(a, b) {
            for (var c = [], d = 0; d < this.length(); d++)
                c.push(this.get(d));
            return c.join(b)
        },
        lastIndexOf: function(a, b, c) {
            var d = this.length()
              , e = d - 1;
            void 0 !== c && (e = 0 > c ? d + c : Math.min(c, e));
            for (var f = e; 0 <= f; f--)
                if (this.has(f) && this.get(f) === b)
                    return f;
            return -1
        },
        map: function(a, b) {
            for (var c = this.length(), d = [], e = 0; e < this.length() && e < c; e++)
                this.has(e) && (d[e] = b.h(a, this.get(e), e, this));
            return new xa(d)
        },
        pop: function() {
            return this.pop()
        },
        push: function(a, b) {
            return this.push.apply(this, Array.prototype.slice.call(arguments, 1))
        },
        reduce: function(a, b, c) {
            var d = this.length(), e, f = 0;
            if (void 0 !== c)
                e = c;
            else {
                if (0 === d)
                    throw Error("TypeError: Reduce on List with no elements.");
                for (var g = 0; g < d; g++)
                    if (this.has(g)) {
                        e = this.get(g);
                        f = g + 1;
                        break
                    }
                if (g === d)
                    throw Error("TypeError: Reduce on List with no elements.");
            }
            for (var h = f; h < d; h++)
                this.has(h) && (e = b.h(a, e, this.get(h), h, this));
            return e
        },
        reduceRight: function(a, b, c) {
            var d = this.length(), e, f = d - 1;
            if (void 0 !== c)
                e = c;
            else {
                if (0 === d)
                    throw Error("TypeError: ReduceRight on List with no elements.");
                for (var g = 1; g <= d; g++)
                    if (this.has(d - g)) {
                        e = this.get(d - g);
                        f = d - (g + 1);
                        break
                    }
                if (g > d)
                    throw Error("TypeError: ReduceRight on List with no elements.");
            }
            for (var h = f; 0 <= h; h--)
                this.has(h) && (e = b.h(a, e, this.get(h), h, this));
            return e
        },
        reverse: function() {
            for (var a = Tc(this), b = a.length - 1, c = 0; 0 <= b; b--,
            c++)
                a.hasOwnProperty(b) ? this.set(c, a[b]) : ya(this, c);
            return this
        },
        shift: function() {
            return this.shift()
        },
        slice: function(a, b, c) {
            var d = this.length();
            void 0 === b && (b = 0);
            b = 0 > b ? Math.max(d + b, 0) : Math.min(b, d);
            c = void 0 === c ? d : 0 > c ? Math.max(d + c, 0) : Math.min(c, d);
            c = Math.max(b, c);
            for (var e = [], f = b; f < c; f++)
                e.push(this.get(f));
            return new xa(e)
        },
        some: function(a, b) {
            for (var c = this.length(), d = 0; d < this.length() && d < c; d++)
                if (this.has(d) && b.h(a, this.get(d), d, this))
                    return !0;
            return !1
        },
        sort: function(a, b) {
            var c = Tc(this);
            void 0 === b ? c.sort() : c.sort(function(e, f) {
                return Number(b.h(a, e, f))
            });
            for (var d = 0; d < c.length; d++)
                c.hasOwnProperty(d) ? this.set(d, c[d]) : ya(this, d);
            return this
        },
        splice: function(a, b, c, d) {
            return this.splice.apply(this, Array.prototype.splice.call(arguments, 1, arguments.length - 1))
        },
        toString: function() {
            return this.toString()
        },
        unshift: function(a, b) {
            return this.unshift.apply(this, Array.prototype.slice.call(arguments, 1))
        }
    };
    var Wc = {
        charAt: 1,
        concat: 1,
        indexOf: 1,
        lastIndexOf: 1,
        match: 1,
        replace: 1,
        search: 1,
        slice: 1,
        split: 1,
        substring: 1,
        toLowerCase: 1,
        toLocaleLowerCase: 1,
        toString: 1,
        toUpperCase: 1,
        toLocaleUpperCase: 1,
        trim: 1
    }
      , Xc = new sa("break")
      , Yc = new sa("continue")
      , Zc = function(a, b) {
        return E(this, a) + E(this, b)
    }
      , $c = function(a, b) {
        return E(this, a) && E(this, b)
    }
      , ad = function(a, b, c) {
        a = E(this, a);
        b = E(this, b);
        c = E(this, c);
        if (!(c instanceof xa))
            throw Error("Error: Non-List argument given to Apply instruction.");
        if (null === a || void 0 === a)
            throw Error("TypeError: Can't read property " + b + " of " + a + ".");
        var d = "number" === typeof a;
        if ("boolean" === typeof a || d) {
            if ("toString" === b) {
                if (d && c.length()) {
                    var e = Sc(c.get(0));
                    try {
                        return a.toString(e)
                    } catch (r) {}
                }
                return a.toString()
            }
            throw Error("TypeError: " + a + "." + b + " is not a function.");
        }
        if ("string" === typeof a) {
            if (Wc.hasOwnProperty(b)) {
                var f = 2;
                var g = Sc(c, void 0, f);
                return Rc(a[b].apply(a, g), this.h)
            }
            throw Error("TypeError: " + b + " is not a function");
        }
        if (a instanceof xa) {
            if (a.has(b)) {
                var h = a.get(b);
                if (h instanceof gb) {
                    var l = Tc(c);
                    l.unshift(this.h);
                    return h.h.apply(h, l)
                }
                throw Error("TypeError: " + b + " is not a function");
            }
            if (0 <= Vc.supportedMethods.indexOf(b)) {
                var n = Tc(c);
                n.unshift(this.h);
                return Vc[b].apply(a, n)
            }
        }
        if (a instanceof gb || a instanceof kb) {
            if (a.has(b)) {
                var p = a.get(b);
                if (p instanceof gb) {
                    var q = Tc(c);
                    q.unshift(this.h);
                    return p.h.apply(p, q)
                }
                throw Error("TypeError: " + b + " is not a function");
            }
            if ("toString" === b)
                return a instanceof gb ? a.R : a.toString();
            if ("hasOwnProperty" === b)
                return a.has.apply(a, Tc(c))
        }
        if (a instanceof Kc && "toString" === b)
            return a.toString();
        throw Error("TypeError: Object has no '" + b + "' property.");
    }
      , bd = function(a, b) {
        a = E(this, a);
        if ("string" !== typeof a)
            throw Error("Invalid key name given for assignment.");
        var c = this.h;
        if (!c.has(a))
            throw Error("Attempting to assign to undefined value " + b);
        var d = E(this, b);
        c.set(a, d);
        return d
    }
      , cd = function(a) {
        var b = Ca(this.h)
          , c = jb(b, Array.prototype.slice.apply(arguments));
        if (c instanceof sa)
            return c
    }
      , dd = function() {
        return Xc
    }
      , ed = function(a) {
        for (var b = E(this, a), c = 0; c < b.length; c++) {
            var d = E(this, b[c]);
            if (d instanceof sa)
                return d
        }
    }
      , fd = function(a) {
        for (var b = this.h, c = 0; c < arguments.length - 1; c += 2) {
            var d = arguments[c];
            if ("string" === typeof d) {
                var e = E(this, arguments[c + 1]);
                Ba(b, d, e, !0)
            }
        }
    }
      , gd = function() {
        return Yc
    }
      , hd = function(a, b, c) {
        var d = new xa;
        b = E(this, b);
        for (var e = 0; e < b.length; e++)
            d.push(b[e]);
        var f = [51, a, d].concat(Array.prototype.splice.call(arguments, 2, arguments.length - 2));
        this.h.add(a, E(this, f))
    }
      , id = function(a, b) {
        return E(this, a) / E(this, b)
    }
      , jd = function(a, b) {
        a = E(this, a);
        b = E(this, b);
        var c = a instanceof Kc
          , d = b instanceof Kc;
        return c || d ? c && d ? a.Na == b.Na : !1 : a == b
    }
      , kd = function(a) {
        for (var b, c = 0; c < arguments.length; c++)
            b = E(this, arguments[c]);
        return b
    };
    function ld(a, b, c, d) {
        for (var e = 0; e < b(); e++) {
            var f = a(c(e))
              , g = jb(f, d);
            if (g instanceof sa) {
                if ("break" === g.h)
                    break;
                if ("return" === g.h)
                    return g
            }
        }
    }
    function md(a, b, c) {
        if ("string" === typeof b)
            return ld(a, function() {
                return b.length
            }, function(f) {
                return f
            }, c);
        if (b instanceof kb || b instanceof xa || b instanceof gb) {
            var d = b.xb()
              , e = d.length();
            return ld(a, function() {
                return e
            }, function(f) {
                return d.get(f)
            }, c)
        }
    }
    var nd = function(a, b, c) {
        a = E(this, a);
        b = E(this, b);
        c = E(this, c);
        var d = this.h;
        return md(function(e) {
            d.set(a, e);
            return d
        }, b, c)
    }
      , pd = function(a, b, c) {
        a = E(this, a);
        b = E(this, b);
        c = E(this, c);
        var d = this.h;
        return md(function(e) {
            var f = Ca(d);
            Ba(f, a, e, !0);
            return f
        }, b, c)
    }
      , qd = function(a, b, c) {
        a = E(this, a);
        b = E(this, b);
        c = E(this, c);
        var d = this.h;
        return md(function(e) {
            var f = Ca(d);
            f.add(a, e);
            return f
        }, b, c)
    }
      , sd = function(a, b, c) {
        a = E(this, a);
        b = E(this, b);
        c = E(this, c);
        var d = this.h;
        return rd(function(e) {
            d.set(a, e);
            return d
        }, b, c)
    }
      , td = function(a, b, c) {
        a = E(this, a);
        b = E(this, b);
        c = E(this, c);
        var d = this.h;
        return rd(function(e) {
            var f = Ca(d);
            Ba(f, a, e, !0);
            return f
        }, b, c)
    }
      , ud = function(a, b, c) {
        a = E(this, a);
        b = E(this, b);
        c = E(this, c);
        var d = this.h;
        return rd(function(e) {
            var f = Ca(d);
            f.add(a, e);
            return f
        }, b, c)
    };
    function rd(a, b, c) {
        if ("string" === typeof b)
            return ld(a, function() {
                return b.length
            }, function(d) {
                return b[d]
            }, c);
        if (b instanceof xa)
            return ld(a, function() {
                return b.length()
            }, function(d) {
                return b.get(d)
            }, c);
        throw new TypeError("The value is not iterable.");
    }
    var vd = function(a, b, c, d) {
        function e(p, q) {
            for (var r = 0; r < f.length(); r++) {
                var t = f.get(r);
                q.add(t, p.get(t))
            }
        }
        var f = E(this, a);
        if (!(f instanceof xa))
            throw Error("TypeError: Non-List argument given to ForLet instruction.");
        var g = this.h;
        d = E(this, d);
        var h = Ca(g);
        for (e(g, h); ib(h, b); ) {
            var l = jb(h, d);
            if (l instanceof sa) {
                if ("break" === l.h)
                    break;
                if ("return" === l.h)
                    return l
            }
            var n = Ca(g);
            e(h, n);
            ib(n, c);
            h = n
        }
    }
      , wd = function(a) {
        a = E(this, a);
        var b = this.h
          , c = !1;
        if (c && !b.has(a))
            throw new ReferenceError(a + " is not defined.");
        return b.get(a)
    }
      , xd = function(a, b) {
        var c;
        a = E(this, a);
        b = E(this, b);
        if (void 0 === a || null === a)
            throw Error("TypeError: cannot access property of " + a + ".");
        if (a instanceof kb || a instanceof xa || a instanceof gb)
            c = a.get(b);
        else if ("string" === typeof a)
            "length" === b ? c = a.length : ta(b) && (c = a[b]);
        else if (a instanceof Kc)
            return;
        return c
    }
      , yd = function(a, b) {
        return E(this, a) > E(this, b)
    }
      , zd = function(a, b) {
        return E(this, a) >= E(this, b)
    }
      , Ad = function(a, b) {
        a = E(this, a);
        b = E(this, b);
        a instanceof Kc && (a = a.Na);
        b instanceof Kc && (b = b.Na);
        return a === b
    }
      , Bd = function(a, b) {
        return !Ad.call(this, a, b)
    }
      , Cd = function(a, b, c) {
        var d = [];
        E(this, a) ? d = E(this, b) : c && (d = E(this, c));
        var e = jb(this.h, d);
        if (e instanceof sa)
            return e
    }
      , Dd = function(a, b) {
        return E(this, a) < E(this, b)
    }
      , Ed = function(a, b) {
        return E(this, a) <= E(this, b)
    }
      , Fd = function(a, b) {
        return E(this, a) % E(this, b)
    }
      , Gd = function(a, b) {
        return E(this, a) * E(this, b)
    }
      , Hd = function(a) {
        return -E(this, a)
    }
      , Id = function(a) {
        return !E(this, a)
    }
      , Jd = function(a, b) {
        return !jd.call(this, a, b)
    }
      , Kd = function() {
        return null
    }
      , Ld = function(a, b) {
        return E(this, a) || E(this, b)
    }
      , Md = function(a, b) {
        var c = E(this, a);
        E(this, b);
        return c
    }
      , Rd = function(a) {
        return E(this, a)
    }
      , Sd = function(a) {
        return Array.prototype.slice.apply(arguments)
    }
      , Td = function(a) {
        return new sa("return",E(this, a))
    }
      , Ud = function(a, b, c) {
        a = E(this, a);
        b = E(this, b);
        c = E(this, c);
        if (null === a || void 0 === a)
            throw Error("TypeError: Can't set property " + b + " of " + a + ".");
        (a instanceof gb || a instanceof xa || a instanceof kb) && a.set(b, c);
        return c
    }
      , Vd = function(a, b) {
        return E(this, a) - E(this, b)
    }
      , Wd = function(a, b, c) {
        a = E(this, a);
        var d = E(this, b)
          , e = E(this, c);
        if (!Ia(d) || !Ia(e))
            throw Error("Error: Malformed switch instruction.");
        for (var f, g = !1, h = 0; h < d.length; h++)
            if (g || a === E(this, d[h]))
                if (f = E(this, e[h]),
                f instanceof sa) {
                    var l = f.h;
                    if ("break" === l)
                        return;
                    if ("return" === l || "continue" === l)
                        return f
                } else
                    g = !0;
        if (e.length === d.length + 1 && (f = E(this, e[e.length - 1]),
        f instanceof sa && ("return" === f.h || "continue" === f.h)))
            return f
    }
      , Xd = function(a, b, c) {
        return E(this, a) ? E(this, b) : E(this, c)
    }
      , Yd = function(a) {
        a = E(this, a);
        return a instanceof gb ? "function" : typeof a
    }
      , Zd = function(a) {
        for (var b = this.h, c = 0; c < arguments.length; c++) {
            var d = arguments[c];
            "string" !== typeof d || b.add(d, void 0)
        }
    }
      , $d = function(a, b, c, d) {
        var e = E(this, d);
        if (E(this, c)) {
            var f = jb(this.h, e);
            if (f instanceof sa) {
                if ("break" === f.h)
                    return;
                if ("return" === f.h)
                    return f
            }
        }
        for (; E(this, a); ) {
            var g = jb(this.h, e);
            if (g instanceof sa) {
                if ("break" === g.h)
                    break;
                if ("return" === g.h)
                    return g
            }
            E(this, b)
        }
    }
      , ae = function(a) {
        return ~Number(E(this, a))
    }
      , be = function(a, b) {
        return Number(E(this, a)) << Number(E(this, b))
    }
      , ce = function(a, b) {
        return Number(E(this, a)) >> Number(E(this, b))
    }
      , de = function(a, b) {
        return Number(E(this, a)) >>> Number(E(this, b))
    }
      , ee = function(a, b) {
        return Number(E(this, a)) & Number(E(this, b))
    }
      , fe = function(a, b) {
        return Number(E(this, a)) ^ Number(E(this, b))
    }
      , ge = function(a, b) {
        return Number(E(this, a)) | Number(E(this, b))
    };
    var ie = function() {
        this.h = new mb;
        he(this)
    };
    ie.prototype.execute = function(a) {
        return je(this.h.m(a))
    }
    ;
    var ke = function(a, b, c) {
        return je(a.h.D(b, c))
    }
      , he = function(a) {
        var b = function(d, e) {
            ob(a.h, d, String(e))
        };
        b("control", 49);
        b("fn", 51);
        b("list", 7);
        b("map", 8);
        b("undefined", 44);
        var c = function(d, e) {
            nb(a.h, String(d), e)
        };
        c(0, Zc);
        c(1, $c);
        c(2, ad);
        c(3, bd);
        c(53, cd);
        c(4, dd);
        c(5, ed);
        c(52, fd);
        c(6, gd);
        c(9, ed);
        c(50, hd);
        c(10, id);
        c(12, jd);
        c(13, kd);
        c(47, nd);
        c(54, pd);
        c(55, qd);
        c(63, vd);
        c(64, sd);
        c(65, td);
        c(66, ud);
        c(15, wd);
        c(16, xd);
        c(17, xd);
        c(18, yd);
        c(19, zd);
        c(20, Ad);
        c(21, Bd);
        c(22, Cd);
        c(23, Dd);
        c(24, Ed);
        c(25, Fd);
        c(26, Gd);
        c(27, Hd);
        c(28, Id);
        c(29, Jd);
        c(45, Kd);
        c(30, Ld);
        c(32, Md);
        c(33, Md);
        c(34, Rd);
        c(35, Rd);
        c(46, Sd);
        c(36, Td);
        c(43, Ud);
        c(37, Vd);
        c(38, Wd);
        c(39, Xd);
        c(40, Yd);
        c(41, Zd);
        c(42, $d);
        c(58, ae);
        c(57, be);
        c(60, ce);
        c(61, de);
        c(56, ee);
        c(62, fe);
        c(59, ge)
    };
    function je(a) {
        if (a instanceof sa || a instanceof gb || a instanceof xa || a instanceof kb || a instanceof Kc || null === a || void 0 === a || "string" === typeof a || "number" === typeof a || "boolean" === typeof a)
            return a
    }
    ;var le = function() {
        var a = function(b) {
            return {
                toString: function() {
                    return b
                }
            }
        };
        return {
            Di: a("consent"),
            Ag: a("convert_case_to"),
            Bg: a("convert_false_to"),
            Cg: a("convert_null_to"),
            Dg: a("convert_true_to"),
            Eg: a("convert_undefined_to"),
            rl: a("debug_mode_metadata"),
            Ua: a("function"),
            yf: a("instance_name"),
            sj: a("live_only"),
            tj: a("malware_disabled"),
            uj: a("metadata"),
            xj: a("original_activity_id"),
            Cl: a("original_vendor_template_id"),
            Bl: a("once_on_load"),
            wj: a("once_per_event"),
            Dh: a("once_per_load"),
            El: a("priority_override"),
            Fl: a("respected_consent_types"),
            Hh: a("setup_tags"),
            zb: a("tag_id"),
            Mh: a("teardown_tags")
        }
    }();
    var He;
    var Ie = [], Je = [], Ke = [], Le = [], Me = [], Ne = {}, Oe, Pe, Re = function() {
        var a = Qe;
        Pe = Pe || a
    }, Se, Te = function(a, b) {
        var c = {};
        c["function"] = "__" + a;
        for (var d in b)
            b.hasOwnProperty(d) && (c["vtp_" + d] = b[d]);
        return c
    }, Ue = function(a, b) {
        var c = a["function"]
          , d = b && b.event;
        if (!c)
            throw Error("Error: No function name given for function call.");
        var e = Ne[c], f = {}, g;
        for (g in a)
            a.hasOwnProperty(g) && 0 === g.indexOf("vtp_") && (e && d && d.Rh && d.Rh(a[g]),
            f[void 0 !== e ? g : g.substr(4)] = a[g]);
        e && d && d.Qh && (f.vtp_gtmCachedValues = d.Qh);
        if (b) {
            if (null == b.name) {
                var h;
                a: {
                    var l = b.index;
                    if (null == l)
                        h = "";
                    else {
                        var n;
                        switch (b.type) {
                        case 2:
                            n = Ie[l];
                            break;
                        case 1:
                            n = Le[l];
                            break;
                        default:
                            h = "";
                            break a
                        }
                        var p = n && n[le.yf];
                        h = p ? String(p) : ""
                    }
                }
                b.name = h
            }
            e && (f.vtp_gtmEntityIndex = b.index,
            f.vtp_gtmEntityName = b.name)
        }
        return void 0 !== e ? e(f) : He(c, f, b)
    }, We = function(a, b, c) {
        c = c || [];
        var d = {}, e;
        for (e in a)
            a.hasOwnProperty(e) && (d[e] = Ve(a[e], b, c));
        return d
    }, Ve = function(a, b, c) {
        if (Ia(a)) {
            var d;
            switch (a[0]) {
            case "function_id":
                return a[1];
            case "list":
                d = [];
                for (var e = 1; e < a.length; e++)
                    d.push(Ve(a[e], b, c));
                return d;
            case "macro":
                var f = a[1];
                if (c[f])
                    return;
                var g = Ie[f];
                if (!g || b.Uf(g))
                    return;
                c[f] = !0;
                var h = String(g[le.yf]);
                try {
                    var l = We(g, b, c);
                    l.vtp_gtmEventId = b.id;
                    b.priorityId && (l.vtp_gtmPriorityId = b.priorityId);
                    d = Ue(l, {
                        event: b,
                        index: f,
                        type: 2,
                        name: h
                    });
                    Se && (d = Se.Kj(d, l))
                } catch (y) {
                    b.ci && b.ci(y, Number(f), h),
                    d = !1
                }
                c[f] = !1;
                return d;
            case "map":
                d = {};
                for (var n = 1; n < a.length; n += 2)
                    d[Ve(a[n], b, c)] = Ve(a[n + 1], b, c);
                return d;
            case "template":
                d = [];
                for (var p = !1, q = 1; q < a.length; q++) {
                    var r = Ve(a[q], b, c);
                    Pe && (p = p || r === Pe.ne);
                    d.push(r)
                }
                return Pe && p ? Pe.Nj(d) : d.join("");
            case "escape":
                d = Ve(a[1], b, c);
                if (Pe && Ia(a[1]) && "macro" === a[1][0] && Pe.pk(a))
                    return Pe.Jk(d);
                d = String(d);
                for (var t = 2; t < a.length; t++)
                    me[a[t]] && (d = me[a[t]](d));
                return d;
            case "tag":
                var u = a[1];
                if (!Le[u])
                    throw Error("Unable to resolve tag reference " + u + ".");
                return d = {
                    Wh: a[2],
                    index: u
                };
            case "zb":
                var v = {
                    arg0: a[2],
                    arg1: a[3],
                    ignore_case: a[5]
                };
                v["function"] = a[1];
                var w = Xe(v, b, c)
                  , x = !!a[4];
                return x || 2 !== w ? x !== (1 === w) : null;
            default:
                throw Error("Attempting to expand unknown Value type: " + a[0] + ".");
            }
        }
        return a
    }, Xe = function(a, b, c) {
        try {
            return Oe(We(a, b, c))
        } catch (d) {
            JSON.stringify(a)
        }
        return 2
    };
    var Ye = function(a, b, c) {
        var d;
        d = Error.call(this);
        this.message = d.message;
        "stack"in d && (this.stack = d.stack);
        this.m = a;
        this.h = c
    };
    pa(Ye, Error);
    function Ze(a, b) {
        if (Ia(a)) {
            Object.defineProperty(a, "context", {
                value: {
                    line: b[0]
                }
            });
            for (var c = 1; c < a.length; c++)
                Ze(a[c], b[c])
        }
    }
    ;var $e = function(a, b) {
        var c;
        c = Error.call(this);
        this.message = c.message;
        "stack"in c && (this.stack = c.stack);
        this.Fk = a;
        this.m = b;
        this.h = []
    };
    pa($e, Error);
    var bf = function() {
        return function(a, b) {
            a instanceof $e || (a = new $e(a,af));
            b && a.h.push(b);
            throw a;
        }
    };
    function af(a) {
        if (!a.length)
            return a;
        a.push({
            id: "main",
            line: 0
        });
        for (var b = a.length - 1; 0 < b; b--)
            Ha(a[b].id) && a.splice(b++, 1);
        for (var c = a.length - 1; 0 < c; c--)
            a[c].line = a[c - 1].line;
        a.splice(0, 1);
        return a
    }
    ;var ef = function(a) {
        function b(r) {
            for (var t = 0; t < r.length; t++)
                d[r[t]] = !0
        }
        for (var c = [], d = [], e = cf(a), f = 0; f < Je.length; f++) {
            var g = Je[f]
              , h = df(g, e);
            if (h) {
                for (var l = g.add || [], n = 0; n < l.length; n++)
                    c[l[n]] = !0;
                b(g.block || [])
            } else
                null === h && b(g.block || []);
        }
        for (var p = [], q = 0; q < Le.length; q++)
            c[q] && !d[q] && (p[q] = !0);
        return p
    }
      , df = function(a, b) {
        for (var c = a["if"] || [], d = 0; d < c.length; d++) {
            var e = b(c[d]);
            if (0 === e)
                return !1;
            if (2 === e)
                return null
        }
        for (var f = a.unless || [], g = 0; g < f.length; g++) {
            var h = b(f[g]);
            if (2 === h)
                return null;
            if (1 === h)
                return !1
        }
        return !0
    }
      , cf = function(a) {
        var b = [];
        return function(c) {
            void 0 === b[c] && (b[c] = Xe(Ke[c], a));
            return b[c]
        }
    };
    var ff = {
        Kj: function(a, b) {
            b[le.Ag] && "string" === typeof a && (a = 1 == b[le.Ag] ? a.toLowerCase() : a.toUpperCase());
            b.hasOwnProperty(le.Cg) && null === a && (a = b[le.Cg]);
            b.hasOwnProperty(le.Eg) && void 0 === a && (a = b[le.Eg]);
            b.hasOwnProperty(le.Dg) && !0 === a && (a = b[le.Dg]);
            b.hasOwnProperty(le.Bg) && !1 === a && (a = b[le.Bg]);
            return a
        }
    };
    var gf = function() {
        this.h = {}
    };
    function hf(a, b, c, d) {
        if (a)
            for (var e = 0; e < a.length; e++) {
                var f = void 0
                  , g = "A policy function denied the permission request";
                try {
                    f = a[e].call(void 0, b, c, d),
                    g += "."
                } catch (h) {
                    g = "string" === typeof h ? g + (": " + h) : h instanceof Error ? g + (": " + h.message) : g + "."
                }
                if (!f)
                    throw new Ye(c,d,g);
            }
    }
    function jf(a, b, c) {
        return function() {
            var d = arguments[0];
            if (d) {
                var e = a.h[d]
                  , f = a.h.all;
                if (e || f) {
                    var g = c.apply(void 0, Array.prototype.slice.call(arguments, 0));
                    hf(e, b, d, g);
                    hf(f, b, d, g)
                }
            }
        }
    }
    ;var mf = function() {
        var a = data.permissions || {}
          , b = L.C
          , c = this;
        this.m = new gf;
        this.h = {};
        var d = {}
          , e = jf(this.m, b, function() {
            var f = arguments[0];
            return f && d[f] ? d[f].apply(void 0, Array.prototype.slice.call(arguments, 0)) : {}
        });
        m(a, function(f, g) {
            var h = {};
            m(g, function(l, n) {
                var p = kf(l, n);
                h[l] = p.assert;
                d[l] || (d[l] = p.Z)
            });
            c.h[f] = function(l, n) {
                var p = h[l];
                if (!p)
                    throw lf(l, {}, "The requested permission " + l + " is not configured.");
                var q = Array.prototype.slice.call(arguments, 0);
                p.apply(void 0, q);
                e.apply(void 0, q)
            }
        })
    }
      , of = function(a) {
        return nf.h[a] || function() {}
    };
    function kf(a, b) {
        var c = Te(a, b);
        c.vtp_permissionName = a;
        c.vtp_createPermissionError = lf;
        try {
            return Ue(c)
        } catch (d) {
            return {
                assert: function(e) {
                    throw new Ye(e,{},"Permission " + e + " is unknown.");
                },
                Z: function() {
                    for (var e = {}, f = 0; f < arguments.length; ++f)
                        e["arg" + (f + 1)] = arguments[f];
                    return e
                }
            }
        }
    }
    function lf(a, b, c) {
        return new Ye(a,b,c)
    }
    ;var pf = !1;
    var qf = {};
    qf.ql = Qa('');
    qf.Qj = Qa('');
    var rf = pf
      , sf = qf.Qj
      , tf = qf.ql;
    var uf = function(a, b) {
        var c = String(a);
        return c
    };
    var Af = function(a) {
        var b = {}
          , c = 0;
        m(a, function(e, f) {
            if (!(void 0 === f || vf && null == f))
                if (f = uf(f, 100),
                wf.hasOwnProperty(e))
                    b[wf[e]] = xf(f);
                else if (yf.hasOwnProperty(e)) {
                    var g = yf[e]
                      , h = xf(f);
                    b.hasOwnProperty(g) || (b[g] = h)
                } else if ("category" === e)
                    for (var l = xf(f).split("/", 5), n = 0; n < l.length; n++) {
                        var p = zf[n]
                          , q = l[n];
                        b.hasOwnProperty(p) || (b[p] = q)
                    }
                else if (27 > c) {
                    var r = String.fromCharCode(10 > c ? 48 + c : 65 + c - 10);
                    b["k" + r] = xf(uf(e, 40));
                    b["v" + r] = xf(f);
                    c++
                }
        });
        var d = [];
        m(b, function(e, f) {
            d.push("" + e + f)
        });
        return d.join("~")
    }
      , xf = function(a) {
        return ("" + a).replace(/~/g, function() {
            return "~~"
        })
    }
      , vf = !1;
    var wf = {
        item_id: "id",
        item_name: "nm",
        item_brand: "br",
        item_category: "ca",
        item_category2: "c2",
        item_category3: "c3",
        item_category4: "c4",
        item_category5: "c5",
        item_variant: "va",
        price: "pr",
        quantity: "qt",
        coupon: "cp",
        item_list_name: "ln",
        index: "lp",
        item_list_id: "li",
        discount: "ds",
        affiliation: "af",
        promotion_id: "pi",
        promotion_name: "pn",
        creative_name: "cn",
        creative_slot: "cs",
        location_id: "lo"
    }
      , yf = {
        id: "id",
        name: "nm",
        brand: "br",
        variant: "va",
        list_name: "ln",
        list_position: "lp",
        list: "ln",
        position: "lp",
        creative: "cn"
    }
      , zf = ["ca", "c2", "c3", "c4", "c5"];
    var Bf = function(a) {
        var b = [];
        m(a, function(c, d) {
            null != d && b.push(encodeURIComponent(c) + "=" + encodeURIComponent(String(d)))
        });
        return b.join("&")
    }
      , Cf = function(a, b, c, d) {
        this.Ba = a.Ba;
        this.Rb = a.Rb;
        this.Nf = a.Nf;
        this.h = b;
        this.D = c;
        this.B = Bf(a.Ba);
        this.m = Bf(a.Nf);
        this.K = this.m.length;
        if (d && 16384 < this.K)
            throw Error("EVENT_TOO_LARGE");
    };
    var Df = function() {
        this.events = [];
        this.h = this.Ba = "";
        this.B = 0;
        this.m = !1
    };
    Df.prototype.add = function(a) {
        return this.D(a) ? (this.events.push(a),
        this.Ba = a.B,
        this.h = a.h,
        this.B += a.K,
        this.m = a.D,
        !0) : !1
    }
    ;
    Df.prototype.D = function(a) {
        var b = 20 > this.events.length && 16384 > a.K + this.B
          , c = this.Ba === a.B && this.h === a.h && this.m === a.D;
        return 0 == this.events.length || b && c
    }
    ;
    var Ef = function(a, b) {
        m(a, function(c, d) {
            null != d && b.push(encodeURIComponent(c) + "=" + encodeURIComponent(d))
        })
    }
      , Ff = function(a, b) {
        var c = [];
        a.B && c.push(a.B);
        b && c.push("_s=" + b);
        Ef(a.Rb, c);
        var d = !1;
        a.m && (c.push(a.m),
        d = !0);
        var e = c.join("&")
          , f = ""
          , g = e.length + a.h.length + 1;
        d && 2048 < g && (f = c.pop(),
        e = c.join("&"));
        return {
            ig: e,
            body: f
        }
    }
      , Gf = function(a, b) {
        var c = a.events;
        if (1 == c.length)
            return Ff(c[0], b);
        var d = [];
        a.Ba && d.push(a.Ba);
        for (var e = {}, f = 0; f < c.length; f++)
            m(c[f].Rb, function(t, u) {
                null != u && (e[t] = e[t] || {},
                e[t][String(u)] = e[t][String(u)] + 1 || 1)
            });
        var g = {};
        m(e, function(t, u) {
            var v, w = -1, x = 0;
            m(u, function(y, A) {
                x += A;
                var B = (y.length + t.length + 2) * (A - 1);
                B > w && (v = y,
                w = B)
            });
            x == c.length && (g[t] = v)
        });
        Ef(g, d);
        b && d.push("_s=" + b);
        for (var h = d.join("&"), l = [], n = {}, p = 0; p < c.length; n = {
            Dd: n.Dd
        },
        p++) {
            var q = [];
            n.Dd = {};
            m(c[p].Rb, function(t) {
                return function(u, v) {
                    g[u] != "" + v && (t.Dd[u] = v)
                }
            }(n));
            c[p].m && q.push(c[p].m);
            Ef(n.Dd, q);
            l.push(q.join("&"))
        }
        var r = l.join("\r\n");
        return {
            ig: h,
            body: r
        }
    };
    var Kf = ["matches", "webkitMatchesSelector", "mozMatchesSelector", "msMatchesSelector", "oMatchesSelector"];
    function Lf(a, b) {
        a = String(a);
        b = String(b);
        var c = a.length - b.length;
        return 0 <= c && a.indexOf(b, c) === c
    }
    var Mf = new Ma;
    function Nf(a, b, c) {
        var d = c ? "i" : void 0;
        try {
            var e = String(b) + d
              , f = Mf.get(e);
            f || (f = new RegExp(b,d),
            Mf.set(e, f));
            return f.test(a)
        } catch (g) {
            return !1
        }
    }
    function Of(a, b) {
        return 0 <= String(a).indexOf(String(b))
    }
    function Pf(a, b) {
        return String(a) === String(b)
    }
    function Qf(a, b) {
        return Number(a) >= Number(b)
    }
    function Tf(a, b) {
        return Number(a) <= Number(b)
    }
    function Uf(a, b) {
        return Number(a) > Number(b)
    }
    function Vf(a, b) {
        return Number(a) < Number(b)
    }
    function Wf(a, b) {
        return 0 === String(a).indexOf(String(b))
    }
    ;var cg = /^[1-9a-zA-Z_-][1-9a-c][1-9a-v]\d$/;
    function dg(a, b) {
        return "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_"[a << 2 | b]
    }
    ;var eg = /^([a-z][a-z0-9]*):(!|\?)(\*|string|boolean|number|Fn|DustMap|List|OpaqueValue)$/i
      , fg = {
        Fn: "function",
        DustMap: "Object",
        List: "Array"
    }
      , M = function(a, b, c) {
        for (var d = 0; d < b.length; d++) {
            var e = eg.exec(b[d]);
            if (!e)
                throw Error("Internal Error in " + a);
            var f = e[1]
              , g = "!" === e[2]
              , h = e[3]
              , l = c[d];
            if (null == l) {
                if (g)
                    throw Error("Error in " + a + ". Required argument " + f + " not supplied.");
            } else if ("*" !== h) {
                var n = typeof l;
                l instanceof gb ? n = "Fn" : l instanceof xa ? n = "List" : l instanceof kb ? n = "DustMap" : l instanceof Kc && (n = "OpaqueValue");
                if (n != h)
                    throw Error("Error in " + a + ". Argument " + f + " has type " + (fg[n] || n) + ", which does not match required type " + (fg[h] || h) + ".");
            }
        }
    };
    function gg(a) {
        return "" + a
    }
    function hg(a, b) {
        var c = [];
        return c
    }
    ;var ig = function(a, b) {
        var c = new gb(a,function() {
            for (var d = Array.prototype.slice.call(arguments, 0), e = 0; e < d.length; e++)
                d[e] = E(this, d[e]);
            return b.apply(this, d)
        }
        );
        c.Nb();
        return c
    }
      , jg = function(a, b) {
        var c = new kb, d;
        for (d in b)
            if (b.hasOwnProperty(d)) {
                var e = b[d];
                Ea(e) ? c.set(d, ig(a + "_" + d, e)) : (Ha(e) || k(e) || "boolean" === typeof e) && c.set(d, e)
            }
        c.Nb();
        return c
    };
    var kg = function(a, b) {
        M(F(this), ["apiName:!string", "message:?string"], arguments);
        var c = {}
          , d = new kb;
        return d = jg("AssertApiSubject", c)
    };
    var lg = function(a, b) {
        M(F(this), ["actual:?*", "message:?string"], arguments);
        if (a instanceof Mc)
            throw Error("Argument actual cannot have type Promise. Assertions on asynchronous code aren't supported.");
        var c = {}
          , d = new kb;
        return d = jg("AssertThatSubject", c)
    };
    function mg(a) {
        return function() {
            for (var b = [], c = this.h, d = 0; d < arguments.length; ++d)
                b.push(Sc(arguments[d], c));
            return Rc(a.apply(null, b))
        }
    }
    var og = function() {
        for (var a = Math, b = ng, c = {}, d = 0; d < b.length; d++) {
            var e = b[d];
            a.hasOwnProperty(e) && (c[e] = mg(a[e].bind(a)))
        }
        return c
    };
    function pg(a, b) {
        var c = null;
        return c
    }
    pg.M = "internal.createRegExp";
    var qg = function(a) {
        var b;
        return b
    };
    var rg = function(a) {
        var b;
        return b
    };
    var sg = function(a) {
        return encodeURI(a)
    };
    var tg = function(a) {
        return encodeURIComponent(a)
    };
    function ug(a, b) {
        var c = !1;
        M(F(this), ["booleanExpression:!string", "context:?DustMap"], arguments);
        var d = JSON.parse(a);
        if (!d)
            throw Error("Invalid boolean expression string was given.");
        var e = b ? Sc(b) : {};
        c = vg(d, e);
        return c
    }
    var wg = function(a, b) {
        for (var c = 0; c < b.length; c++) {
            if (void 0 === a)
                return;
            a = a[b[c]]
        }
        return a
    }
      , xg = function(a, b) {
        var c = b.preHit;
        if (c) {
            var d = a[0];
            switch (d) {
            case "hitData":
                return 2 > a.length ? void 0 : wg(c.getHitData(a[1]), a.slice(2));
            case "metadata":
                return 2 > a.length ? void 0 : wg(c.getMetadata(a[1]), a.slice(2));
            case "eventName":
                return c.getEventName();
            case "destinationId":
                return c.getDestinationId();
            default:
                throw Error(d + " is not a valid field that can be accessed\n                      from PreHit data.");
            }
        }
    }
      , yg = function(a, b) {
        if (a) {
            if (void 0 !== a.contextValue) {
                var c;
                a: {
                    var d = a.contextValue
                      , e = d.keyParts;
                    if (e && 0 !== e.length) {
                        var f = d.namespaceType;
                        switch (f) {
                        case 1:
                            c = xg(e, b);
                            break a;
                        case 2:
                            var g = b.macro;
                            c = g ? g[e[0]] : void 0;
                            break a;
                        default:
                            throw Error("Unknown Namespace Type used: " + f);
                        }
                    }
                    c = void 0
                }
                return c
            }
            if (void 0 !== a.booleanExpressionValue)
                return vg(a.booleanExpressionValue, b);
            if (void 0 !== a.booleanValue)
                return !!a.booleanValue;
            if (void 0 !== a.stringValue)
                return String(a.stringValue);
            if (void 0 !== a.integerValue)
                return Number(a.integerValue);
            if (void 0 !== a.doubleValue)
                return Number(a.doubleValue);
            throw Error("Unknown field used for variable of type ExpressionValue:" + a);
        }
    }
      , vg = function(a, b) {
        var c = a.args;
        if (!Ia(c) || 0 === c.length)
            throw Error('Invalid boolean expression format. Expected "args":' + c + " property to\n         be non-empty array.");
        var d = function(g) {
            return yg(g, b)
        };
        switch (a.type) {
        case 1:
            for (var e = 0; e < c.length; e++)
                if (d(c[e]))
                    return !0;
            return !1;
        case 2:
            for (var f = 0; f < c.length; f++)
                if (!d(c[f]))
                    return !1;
            return 0 < c.length;
        case 3:
            return !d(c[0]);
        case 4:
            return Nf(d(c[0]), d(c[1]), !1);
        case 5:
            return Pf(d(c[0]), d(c[1]));
        case 6:
            return Wf(d(c[0]), d(c[1]));
        case 7:
            return Lf(d(c[0]), d(c[1]));
        case 8:
            return Of(d(c[0]), d(c[1]));
        case 9:
            return Vf(d(c[0]), d(c[1]));
        case 10:
            return Tf(d(c[0]), d(c[1]));
        case 11:
            return Uf(d(c[0]), d(c[1]));
        case 12:
            return Qf(d(c[0]), d(c[1]));
        default:
            throw Error('Invalid boolean expression format. Expected "type" property tobe a positive integer which is less than 13.');
        }
    };
    ug.M = "internal.evaluateBooleanExpression";
    var zg = function(a) {
        M(F(this), ["message:?string"], arguments);
    };
    var Ag = function(a, b) {
        M(F(this), ["min:!number", "max:!number"], arguments);
        return La(a, b)
    };
    var N = function(a, b, c) {
        var d = a.h.h;
        if (!d)
            throw Error("Missing program state.");
        d.Ij.apply(null, Array.prototype.slice.call(arguments, 1))
    };
    var Bg = function() {
        N(this, "read_container_data");
        var a = new kb;
        a.set("containerId", 'G-F7BELJZMSZ');
        a.set("version", '1');
        a.set("environmentName", '');
        a.set("debugMode", rf);
        a.set("previewMode", tf);
        a.set("environmentMode", sf);
        a.Nb();
        return a
    };
    var Cg = function() {
        return (new Date).getTime()
    };
    var Dg = function(a) {
        if (null === a)
            return "null";
        if (a instanceof xa)
            return "array";
        if (a instanceof gb)
            return "function";
        if (a instanceof Kc) {
            a = a.Na;
            if (void 0 === a.constructor || void 0 === a.constructor.name) {
                var b = String(a);
                return b.substring(8, b.length - 1)
            }
            return String(a.constructor.name)
        }
        return typeof a
    };
    var Eg = function(a) {
        function b(c) {
            return function(d) {
                try {
                    return c(d)
                } catch (e) {
                    (rf || tf) && a.call(this, e.message)
                }
            }
        }
        return {
            parse: b(function(c) {
                return Rc(JSON.parse(c))
            }),
            stringify: b(function(c) {
                return JSON.stringify(Sc(c))
            })
        }
    };
    var Fg = function(a) {
        return Pa(Sc(a, this.h))
    };
    var Gg = function(a) {
        return Number(Sc(a, this.h))
    };
    var Hg = function(a) {
        return null === a ? "null" : void 0 === a ? "undefined" : a.toString()
    };
    var Ig = function(a, b, c) {
        var d = null
          , e = !1;
        return e ? d : null
    };
    var ng = "floor ceil round max min abs pow sqrt".split(" ");
    var Jg = function() {
        var a = {};
        return {
            ck: function(b) {
                return a.hasOwnProperty(b) ? a[b] : void 0
            },
            bl: function(b, c) {
                a[b] = c
            },
            reset: function() {
                a = {}
            }
        }
    }
      , Kg = function(a, b) {
        return function() {
            var c = Array.prototype.slice.call(arguments, 0);
            c.unshift(b);
            return gb.prototype.h.apply(a, c)
        }
    }
      , Lg = function(a, b) {
        M(F(this), ["apiName:!string", "mock:?*"], arguments);
    };
    var Mg = {};
    Mg.keys = function(a) {
        return new xa
    }
    ;
    Mg.values = function(a) {
        return new xa
    }
    ;
    Mg.entries = function(a) {
        return new xa
    }
    ;
    Mg.freeze = function(a) {
        return a
    }
    ;
    Mg.delete = function(a, b) {
        return !1
    }
    ;
    var Og = function() {
        this.h = {};
        this.m = {};
    };
    Og.prototype.get = function(a, b) {
        var c = this.h.hasOwnProperty(a) ? this.h[a] : void 0;
        return c
    }
    ;
    Og.prototype.add = function(a, b, c) {
        if (this.h.hasOwnProperty(a))
            throw "Attempting to add a function which already exists: " + a + ".";
        if (this.m.hasOwnProperty(a))
            throw "Attempting to add an API with an existing private API name: " + a + ".";
        this.h[a] = c ? void 0 : Ea(b) ? ig(a, b) : jg(a, b)
    }
    ;
    function Pg(a, b) {
        var c = void 0;
        return c
    }
    ;function Qg() {
        var a = {};
        return a
    }
    ;function Rg(a, b) {
        var c = !1;
        return c
    }
    Rg.M = "internal.testRegExp";
    var Tg = function(a) {
        return Sg ? H.querySelectorAll(a) : null
    }
      , Ug = function(a, b) {
        if (!Sg)
            return null;
        if (Element.prototype.closest)
            try {
                return a.closest(b)
            } catch (e) {
                return null
            }
        var c = Element.prototype.matches || Element.prototype.webkitMatchesSelector || Element.prototype.mozMatchesSelector || Element.prototype.msMatchesSelector || Element.prototype.oMatchesSelector
          , d = a;
        if (!H.documentElement.contains(d))
            return null;
        do {
            try {
                if (c.call(d, b))
                    return d
            } catch (e) {
                break
            }
            d = d.parentElement || d.parentNode
        } while (null !== d && 1 === d.nodeType);
        return null
    }
      , Vg = !1;
    if (H.querySelectorAll)
        try {
            var Wg = H.querySelectorAll(":root");
            Wg && 1 == Wg.length && Wg[0] == H.documentElement && (Vg = !0)
        } catch (a) {}
    var Sg = Vg;
    var R = function(a) {
        wb("GTM", a)
    };
    var Xg = function(a) {
        return null == a ? "" : k(a) ? Sa(String(a)) : "e0"
    }
      , Zg = function(a) {
        return a.replace(Yg, "")
    }
      , ah = function(a) {
        return $g(a.replace(/\s/g, ""))
    }
      , $g = function(a) {
        return Sa(a.replace(bh, "").toLowerCase())
    }
      , dh = function(a) {
        a = a.replace(/[\s-()/.]/g, "");
        "+" !== a.charAt(0) && (a = "+" + a);
        return ch.test(a) ? a : "e0"
    }
      , fh = function(a) {
        var b = a.toLowerCase().split("@");
        if (2 == b.length) {
            var c = b[0];
            /^(gmail|googlemail)\./.test(b[1]) && (c = c.replace(/\./g, ""));
            c = c + "@" + b[1];
            if (eh.test(c))
                return c
        }
        return "e0"
    }
      , ih = function(a, b) {
        window.Promise || b([]);
        Promise.all(a.map(function(c) {
            return c.value && -1 !== gh.indexOf(c.name) ? hh(c.value).then(function(d) {
                c.value = d
            }) : Promise.resolve()
        })).then(function() {
            b(a)
        }).catch(function() {
            b([])
        })
    }
      , hh = function(a) {
        if ("" === a || "e0" === a)
            return Promise.resolve(a);
        if (z.crypto && z.crypto.subtle) {
            if (jh.test(a))
                return Promise.resolve(a);
            try {
                var b = kh(a);
                return z.crypto.subtle.digest("SHA-256", b).then(function(c) {
                    var d = Array.from(new Uint8Array(c)).map(function(e) {
                        return String.fromCharCode(e)
                    }).join("");
                    return z.btoa(d).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "")
                }).catch(function() {
                    return "e2"
                })
            } catch (c) {
                return Promise.resolve("e2")
            }
        } else
            return Promise.resolve("e1")
    }
      , kh = function(a) {
        var b;
        if (z.TextEncoder)
            b = (new TextEncoder("utf-8")).encode(a);
        else {
            for (var c = [], d = 0; d < a.length; d++) {
                var e = a.charCodeAt(d);
                128 > e ? c.push(e) : 2048 > e ? c.push(192 | e >> 6, 128 | e & 63) : 55296 > e || 57344 <= e ? c.push(224 | e >> 12, 128 | e >> 6 & 63, 128 | e & 63) : (e = 65536 + ((e & 1023) << 10 | a.charCodeAt(++d) & 1023),
                c.push(240 | e >> 18, 128 | e >> 12 & 63, 128 | e >> 6 & 63, 128 | e & 63))
            }
            b = new Uint8Array(c)
        }
        return b
    }
      , bh = /[0-9`~!@#$%^&*()_\-+=:;<>,.?|/\\[\]]/g
      , eh = /^\S+@\S+\.\S+$/
      , ch = /^\+\d{10,15}$/
      , Yg = /[.~]/g
      , lh = /^[0-9A-Za-z_-]{43}$/
      , jh = /^[0-9A-Fa-f]{64}$/
      , mh = {}
      , nh = (mh.email = "em",
    mh.phone_number = "pn",
    mh.first_name = "fn",
    mh.last_name = "ln",
    mh.street = "sa",
    mh.city = "ct",
    mh.region = "rg",
    mh.country = "co",
    mh.postal_code = "pc",
    mh.error_code = "ec",
    mh)
      , oh = {}
      , ph = (oh.email = "sha256_email_address",
    oh.phone_number = "sha256_phone_number",
    oh.first_name = "sha256_first_name",
    oh.last_name = "sha256_last_name",
    oh.street = "sha256_street",
    oh)
      , qh = function(a, b) {
        function c(t, u, v, w) {
            var x = Xg(t);
            "" !== x && (jh.test(x) ? l.push({
                name: u,
                value: x,
                index: w
            }) : l.push({
                name: u,
                value: v(x),
                index: w
            }))
        }
        function d(t, u) {
            var v = t;
            if (k(v) || Ia(v)) {
                v = Ia(t) ? t : [t];
                for (var w = 0; w < v.length; ++w) {
                    var x = Xg(v[w])
                      , y = jh.test(x);
                    u && !y && R(89);
                    !u && y && R(88)
                }
            }
        }
        function e(t, u) {
            var v = t[u];
            d(v, !1);
            var w = ph[u];
            t.hasOwnProperty(w) && (t.hasOwnProperty(u) && R(90),
            v = t[w],
            d(v, !0));
            return v
        }
        function f(t, u, v) {
            var w = e(t, u);
            w = Ia(w) ? w : [w];
            for (var x = 0; x < w.length; ++x)
                c(w[x], u, v)
        }
        function g(t, u, v, w) {
            var x = e(t, u);
            c(x, u, v, w)
        }
        function h(t) {
            return function(u) {
                R(64);
                return t(u)
            }
        }
        var l = [];
        if ("https:" === z.location.protocol) {
            f(a, "email", fh);
            f(a, "phone_number", dh);
            f(a, "first_name", h(ah));
            f(a, "last_name", h(ah));
            var n = a.home_address || {};
            f(n, "street", h($g));
            f(n, "city", h($g));
            f(n, "postal_code", h(Zg));
            f(n, "region", h($g));
            f(n, "country", h(Zg));
            var p = a.address || {};
            p = Ia(p) ? p : [p];
            for (var q = 0; q < p.length; q++) {
                var r = p[q];
                g(r, "first_name", ah, q);
                g(r, "last_name", ah, q);
                g(r, "street", $g, q);
                g(r, "city", $g, q);
                g(r, "postal_code", Zg, q);
                g(r, "region", $g, q);
                g(r, "country", Zg, q)
            }
            ih(l, b)
        } else
            l.push({
                name: "error_code",
                value: "e3",
                index: void 0
            }),
            b(l)
    }
      , rh = function(a, b) {
        qh(a, function(c) {
            for (var d = ["tv.1"], e = 0, f = 0; f < c.length; ++f) {
                var g = c[f].name
                  , h = c[f].value
                  , l = c[f].index
                  , n = nh[g];
                n && h && (-1 === gh.indexOf(g) || /^e\d+$/.test(h) || lh.test(h) || jh.test(h)) && (void 0 !== l && (n += l),
                d.push(n + "." + h),
                e++)
            }
            1 === c.length && "error_code" === c[0].name && (e = 0);
            b(encodeURIComponent(d.join("~")), e)
        })
    }
      , sh = function(a) {
        if (z.Promise)
            try {
                return new Promise(function(b) {
                    rh(a, function(c, d) {
                        b({
                            hg: c,
                            Ik: d
                        })
                    })
                }
                )
            } catch (b) {}
    }
      , gh = Object.freeze(["email", "phone_number", "first_name", "last_name", "street"]);
    var T = {
        g: {
            I: "ad_storage",
            U: "analytics_storage",
            Vb: "region",
            wg: "consent_updated",
            Ne: "wait_for_update",
            Hi: "app_remove",
            Ii: "app_store_refund",
            Ji: "app_store_subscription_cancel",
            Ki: "app_store_subscription_convert",
            Li: "app_store_subscription_renew",
            Fg: "add_payment_info",
            Gg: "add_shipping_info",
            Cc: "add_to_cart",
            Dc: "remove_from_cart",
            Hg: "view_cart",
            Wb: "begin_checkout",
            Ec: "select_item",
            Db: "view_item_list",
            Xb: "select_promotion",
            Eb: "view_promotion",
            Ga: "purchase",
            Fc: "refund",
            Ha: "view_item",
            Ig: "add_to_wishlist",
            Mi: "first_open",
            Ni: "first_visit",
            wa: "gtag.config",
            Ia: "gtag.get",
            Oi: "in_app_purchase",
            Gc: "page_view",
            Pi: "session_start",
            Se: "user_engagement",
            Yb: "gclid",
            ma: "ads_data_redaction",
            aa: "allow_ad_personalization_signals",
            Te: "allow_custom_scripts",
            Qi: "allow_display_features",
            Hd: "allow_enhanced_conversions",
            sb: "allow_google_signals",
            Da: "allow_interest_groups",
            Id: "auid",
            Ri: "auto_detection_enabled",
            Fb: "aw_remarketing",
            Ue: "aw_remarketing_only",
            Jd: "discount",
            Kd: "aw_feed_country",
            Ld: "aw_feed_language",
            fa: "items",
            Md: "aw_merchant_id",
            Jg: "aw_basket_type",
            Nd: "campaign_content",
            Od: "campaign_id",
            Pd: "campaign_medium",
            Qd: "campaign_name",
            Hc: "campaign",
            Rd: "campaign_source",
            Sd: "campaign_term",
            tb: "client_id",
            Si: "content_group",
            Ti: "content_type",
            Ja: "conversion_cookie_prefix",
            Ic: "conversion_id",
            xa: "conversion_linker",
            Jc: "conversion_api",
            eb: "cookie_domain",
            Ka: "cookie_expires",
            fb: "cookie_flags",
            Zb: "cookie_name",
            Td: "cookie_path",
            Ra: "cookie_prefix",
            Gb: "cookie_update",
            Kc: "country",
            qa: "currency",
            Ud: "customer_lifetime_value",
            Lc: "custom_map",
            sl: "gcldc",
            Ui: "debug_mode",
            ca: "developer_id",
            Vi: "disable_merchant_reported_purchases",
            Wi: "dc_custom_params",
            Xi: "dc_natural_search",
            Ve: "dynamic_event_settings",
            Yi: "affiliation",
            Kg: "checkout_option",
            Lg: "checkout_step",
            Zi: "coupon",
            We: "item_list_name",
            Xe: "list_name",
            aj: "promotions",
            Vd: "shipping",
            Mg: "tax",
            Wd: "engagement_time_msec",
            Mc: "enhanced_client_id",
            Nc: "enhanced_conversions",
            Ng: "enhanced_conversions_automatic_settings",
            Xd: "estimated_delivery_date",
            Ye: "euid_logged_in_state",
            ac: "event_callback",
            bc: "event_developer_id_string",
            Og: "event",
            Yd: "event_settings",
            Zd: "event_timeout",
            bj: "experiments",
            Ze: "firebase_id",
            ae: "first_party_collection",
            be: "_x_20",
            Hb: "_x_19",
            Pg: "fledge",
            Qg: "flight_error_code",
            Rg: "flight_error_message",
            ul: "fl_activity_category",
            vl: "fl_activity_group",
            wl: "fl_advertiser_id",
            xl: "fl_total_assisted_revenue",
            yl: "fl_unassisted_revenue",
            Sg: "gac_gclid",
            ce: "gac_wbraid",
            Tg: "gac_wbraid_multiple_conversions",
            af: "ga_restrict_domain",
            bf: "ga_temp_client_id",
            Ug: "gdpr_applies",
            Vg: "geo_granularity",
            ub: "value_callback",
            hb: "value_key",
            zl: "google_ono",
            ib: "google_signals",
            de: "google_tld",
            ee: "groups",
            Wg: "gsa_experiment_id",
            Xg: "iframe_state",
            fe: "ignore_referrer",
            cf: "internal_traffic_results",
            he: "is_legacy_loaded",
            Yg: "is_passthrough",
            Sa: "language",
            df: "legacy_developer_id_string",
            ya: "linker",
            fc: "accept_incoming",
            Ib: "decorate_forms",
            T: "domains",
            hc: "url_position",
            Zg: "method",
            Oc: "new_customer",
            ah: "non_interaction",
            cj: "optimize_id",
            bh: "page_hostname",
            ic: "page_path",
            Ea: "page_referrer",
            Jb: "page_title",
            dh: "passengers",
            eh: "phone_conversion_callback",
            dj: "phone_conversion_country_code",
            fh: "phone_conversion_css_class",
            ej: "phone_conversion_ids",
            gh: "phone_conversion_number",
            hh: "phone_conversion_options",
            ih: "quantity",
            Pc: "redact_device_info",
            ef: "redact_enhanced_user_id",
            fj: "redact_ga_client_id",
            gj: "redact_user_id",
            ie: "referral_exclusion_definition",
            Kb: "restricted_data_processing",
            ij: "retoken",
            jh: "screen_name",
            Lb: "screen_resolution",
            jj: "search_term",
            La: "send_page_view",
            Mb: "send_to",
            Qc: "session_duration",
            je: "session_engaged",
            ff: "session_engaged_time",
            vb: "session_id",
            ke: "session_number",
            Rc: "delivery_postal_code",
            lh: "temporary_client_id",
            hf: "topmost_url",
            kj: "tracking_id",
            jf: "traffic_type",
            Ta: "transaction_id",
            ra: "transport_url",
            mh: "trip_type",
            Sc: "update",
            wb: "url_passthrough",
            kf: "_user_agent_architecture",
            lf: "_user_agent_bitness",
            nf: "_user_agent_full_version_list",
            pf: "_user_agent_mobile",
            qf: "_user_agent_model",
            rf: "_user_agent_platform",
            sf: "_user_agent_platform_version",
            tf: "_user_agent_wow64",
            sa: "user_data",
            nh: "user_data_auto_latency",
            oh: "user_data_auto_meta",
            ph: "user_data_auto_multi",
            qh: "user_data_auto_selectors",
            rh: "user_data_auto_status",
            uf: "user_data_mode",
            vf: "user_data_settings",
            Aa: "user_id",
            Ma: "user_properties",
            sh: "us_privacy_string",
            na: "value",
            me: "wbraid",
            th: "wbraid_multiple_conversions",
            zh: "_host_name",
            Ah: "_in_page_command",
            Bh: "_is_passthrough_cid",
            Ch: "non_personalized_ads",
            Yc: "_sst_parameters",
            cb: "conversion_label",
            za: "page_location",
            cc: "global_developer_id_string",
            kh: "tc_privacy_string"
        }
    }
      , th = {}
      , uh = Object.freeze((th[T.g.aa] = 1,
    th[T.g.Hd] = 1,
    th[T.g.sb] = 1,
    th[T.g.fa] = 1,
    th[T.g.eb] = 1,
    th[T.g.Ka] = 1,
    th[T.g.fb] = 1,
    th[T.g.Zb] = 1,
    th[T.g.Td] = 1,
    th[T.g.Ra] = 1,
    th[T.g.Gb] = 1,
    th[T.g.Lc] = 1,
    th[T.g.ca] = 1,
    th[T.g.Ve] = 1,
    th[T.g.ac] = 1,
    th[T.g.Yd] = 1,
    th[T.g.Zd] = 1,
    th[T.g.ae] = 1,
    th[T.g.af] = 1,
    th[T.g.ib] = 1,
    th[T.g.de] = 1,
    th[T.g.ee] = 1,
    th[T.g.cf] = 1,
    th[T.g.he] = 1,
    th[T.g.ya] = 1,
    th[T.g.ef] = 1,
    th[T.g.ie] = 1,
    th[T.g.Kb] = 1,
    th[T.g.La] = 1,
    th[T.g.Mb] = 1,
    th[T.g.Qc] = 1,
    th[T.g.ff] = 1,
    th[T.g.Rc] = 1,
    th[T.g.ra] = 1,
    th[T.g.Sc] = 1,
    th[T.g.vf] = 1,
    th[T.g.Ma] = 1,
    th[T.g.Yc] = 1,
    th));
    Object.freeze([T.g.za, T.g.Ea, T.g.Jb, T.g.Sa, T.g.jh, T.g.Aa, T.g.Ze, T.g.Si]);
    var vh = {}
      , wh = Object.freeze((vh[T.g.Hi] = 1,
    vh[T.g.Ii] = 1,
    vh[T.g.Ji] = 1,
    vh[T.g.Ki] = 1,
    vh[T.g.Li] = 1,
    vh[T.g.Mi] = 1,
    vh[T.g.Ni] = 1,
    vh[T.g.Oi] = 1,
    vh[T.g.Pi] = 1,
    vh[T.g.Se] = 1,
    vh))
      , xh = {}
      , yh = Object.freeze((xh[T.g.Fg] = 1,
    xh[T.g.Gg] = 1,
    xh[T.g.Cc] = 1,
    xh[T.g.Dc] = 1,
    xh[T.g.Hg] = 1,
    xh[T.g.Wb] = 1,
    xh[T.g.Ec] = 1,
    xh[T.g.Db] = 1,
    xh[T.g.Xb] = 1,
    xh[T.g.Eb] = 1,
    xh[T.g.Ga] = 1,
    xh[T.g.Fc] = 1,
    xh[T.g.Ha] = 1,
    xh[T.g.Ig] = 1,
    xh))
      , zh = Object.freeze([T.g.aa, T.g.sb, T.g.Gb])
      , Ah = Object.freeze([].concat(zh))
      , Bh = Object.freeze([T.g.Ka, T.g.Zd, T.g.Qc, T.g.ff, T.g.Wd])
      , Ch = Object.freeze([].concat(Bh))
      , Dh = {}
      , Eh = (Dh[T.g.I] = "1",
    Dh[T.g.U] = "2",
    Dh)
      , Fh = {}
      , Gh = Object.freeze((Fh[T.g.aa] = 1,
    Fh[T.g.Hd] = 1,
    Fh[T.g.Da] = 1,
    Fh[T.g.Fb] = 1,
    Fh[T.g.Ue] = 1,
    Fh[T.g.Jd] = 1,
    Fh[T.g.Kd] = 1,
    Fh[T.g.Ld] = 1,
    Fh[T.g.fa] = 1,
    Fh[T.g.Md] = 1,
    Fh[T.g.Ja] = 1,
    Fh[T.g.xa] = 1,
    Fh[T.g.eb] = 1,
    Fh[T.g.Ka] = 1,
    Fh[T.g.fb] = 1,
    Fh[T.g.Ra] = 1,
    Fh[T.g.qa] = 1,
    Fh[T.g.Ud] = 1,
    Fh[T.g.ca] = 1,
    Fh[T.g.Vi] = 1,
    Fh[T.g.Nc] = 1,
    Fh[T.g.Xd] = 1,
    Fh[T.g.Ze] = 1,
    Fh[T.g.ae] = 1,
    Fh[T.g.he] = 1,
    Fh[T.g.Sa] = 1,
    Fh[T.g.Oc] = 1,
    Fh[T.g.za] = 1,
    Fh[T.g.Ea] = 1,
    Fh[T.g.eh] = 1,
    Fh[T.g.fh] = 1,
    Fh[T.g.gh] = 1,
    Fh[T.g.hh] = 1,
    Fh[T.g.Kb] = 1,
    Fh[T.g.La] = 1,
    Fh[T.g.Mb] = 1,
    Fh[T.g.Rc] = 1,
    Fh[T.g.Ta] = 1,
    Fh[T.g.ra] = 1,
    Fh[T.g.Sc] = 1,
    Fh[T.g.wb] = 1,
    Fh[T.g.sa] = 1,
    Fh[T.g.Aa] = 1,
    Fh[T.g.na] = 1,
    Fh));
    Object.freeze(T.g);
    var Hh = {}
      , Ih = z.google_tag_manager = z.google_tag_manager || {}
      , Jh = Math.random();
    Hh.Bf = "33r0";
    Hh.Xc = Number("0") || 0;
    Hh.ia = "dataLayer";
    Hh.Fi = "ChEI8KCKoQYQgN2Wqavi/pioARIlAG2iWB0PoBChKPuLS4V125MmLcCwL0+WkPxKfDps7efKAPLjYhoCrjM\x3d";
    var Kh = {
        __cl: !0,
        __ecl: !0,
        __ehl: !0,
        __evl: !0,
        __fal: !0,
        __fil: !0,
        __fsl: !0,
        __hl: !0,
        __jel: !0,
        __lcl: !0,
        __sdl: !0,
        __tl: !0,
        __ytl: !0
    }, Lh = {
        __paused: !0,
        __tg: !0
    }, Mh;
    for (Mh in Kh)
        Kh.hasOwnProperty(Mh) && (Lh[Mh] = !0);
    var Nh = Qa(""), Oh, Ph = !1;
    Ph = !0;
    Oh = Ph;
    var Qh, Rh = !1;
    Qh = Rh;
    var Zh, $h = !1;
    Zh = $h;
    var ai, bi = !1;
    ai = bi;
    Hh.Gd = "www.googletagmanager.com";
    var ci = "" + Hh.Gd + (Oh ? "/gtag/js" : "/gtm.js")
      , di = null
      , ei = null
      , fi = {}
      , gi = {}
      , hi = {}
      , ii = function() {
        var a = Ih.sequence || 1;
        Ih.sequence = a + 1;
        return a
    };
    Hh.Ei = "true";
    var ji = "";
    Hh.se = ji;
    var ki = new Ma
      , li = {}
      , mi = {}
      , pi = {
        name: Hh.ia,
        set: function(a, b) {
            K(cb(a, b), li);
            ni()
        },
        get: function(a) {
            return oi(a, 2)
        },
        reset: function() {
            ki = new Ma;
            li = {};
            ni()
        }
    }
      , oi = function(a, b) {
        return 2 != b ? ki.get(a) : qi(a)
    }
      , qi = function(a, b) {
        var c = a.split(".");
        b = b || [];
        for (var d = li, e = 0; e < c.length; e++) {
            if (null === d)
                return !1;
            if (void 0 === d)
                break;
            d = d[c[e]];
            if (-1 !== b.indexOf(d))
                return
        }
        return d
    }
      , ri = function(a, b) {
        mi.hasOwnProperty(a) || (ki.set(a, b),
        K(cb(a, b), li),
        ni())
    }
      , si = function() {
        for (var a = ["gtm.allowlist", "gtm.blocklist", "gtm.whitelist", "gtm.blacklist", "tagTypeBlacklist"], b = 0; b < a.length; b++) {
            var c = a[b]
              , d = oi(c, 1);
            if (Ia(d) || Qc(d))
                d = K(d);
            mi[c] = d
        }
    }
      , ni = function(a) {
        m(mi, function(b, c) {
            ki.set(b, c);
            K(cb(b), li);
            K(cb(b, c), li);
            a && delete mi[b]
        })
    }
      , ti = function(a, b) {
        var c, d = 1 !== (void 0 === b ? 2 : b) ? qi(a) : ki.get(a);
        "array" === Oc(d) || "object" === Oc(d) ? c = K(d) : c = d;
        return c
    };
    var ui = new function(a, b) {
        this.h = a;
        this.defaultValue = void 0 === b ? !1 : b
    }
    (1933);
    var vi = function(a) {
        vi[" "](a);
        return a
    };
    vi[" "] = function() {}
    ;
    var xi = function() {
        var a = wi
          , b = "Sf";
        if (a.Sf && a.hasOwnProperty(b))
            return a.Sf;
        var c = new a;
        return a.Sf = c
    };
    var wi = function() {
        var a = {};
        this.h = function() {
            var b = ui.h
              , c = ui.defaultValue;
            return null != a[b] ? a[b] : c
        }
        ;
        this.m = function() {
            a[ui.h] = !0
        }
    };
    var yi = !1
      , zi = !1
      , Ai = [];
    function Bi() {
        var a = hc("google_tag_data", {});
        a.ics || (a.ics = {
            entries: {},
            set: Ci,
            update: Di,
            declare: Ei,
            addListener: Fi,
            notifyListeners: Gi,
            active: !1,
            usedDeclare: !1,
            usedDefault: !1,
            usedUpdate: !1,
            accessedDefault: !1,
            accessedAny: !1,
            wasSetLate: !1
        });
        return a.ics
    }
    function Ei(a, b, c, d, e) {
        var f = Bi();
        f.active = !0;
        f.usedDeclare = !0;
        var g = f.entries
          , h = g[a] || {}
          , l = h.declare_region
          , n = c && k(c) ? c.toUpperCase() : void 0;
        d = d.toUpperCase();
        e = e.toUpperCase();
        if ("" === d || n === e || (n === d ? l !== e : !n && !l)) {
            var p = {
                region: h.region,
                declare_region: n,
                declare: "granted" === b,
                initial: h.initial,
                update: h.update,
                quiet: h.quiet
            };
            if ("" !== d || !1 !== h.declare)
                g[a] = p
        }
    }
    function Ci(a, b, c, d, e, f) {
        var g = Bi();
        g.usedDefault || !g.accessedDefault && !g.accessedAny || (g.wasSetLate = !0);
        g.active = !0;
        g.usedDefault = !0;
        wb("TAGGING", 19);
        if (void 0 == b)
            wb("TAGGING", 18);
        else {
            var h = g.entries
              , l = h[a] || {}
              , n = l.region
              , p = c && k(c) ? c.toUpperCase() : void 0;
            d = d.toUpperCase();
            e = e.toUpperCase();
            if ("" === d || p === e || (p === d ? n !== e : !p && !n)) {
                var q = !!(f && 0 < f && void 0 === l.update)
                  , r = {
                    region: p,
                    declare_region: l.declare_region,
                    initial: "granted" === b,
                    declare: l.declare,
                    update: l.update,
                    quiet: q
                };
                if ("" !== d || !1 !== l.initial)
                    h[a] = r;
                q && z.setTimeout(function() {
                    h[a] === r && r.quiet && (r.quiet = !1,
                    Hi(a),
                    Gi(),
                    wb("TAGGING", 2))
                }, f)
            }
        }
    }
    function Di(a, b) {
        var c = Bi();
        c.usedDefault || c.usedUpdate || !c.accessedAny || (c.wasSetLate = !0);
        c.active = !0;
        c.usedUpdate = !0;
        if (void 0 != b) {
            var d = Ii(c, a)
              , e = c.entries
              , f = e[a] = e[a] || {};
            f.update = "granted" === b;
            var g = Ii(c, a);
            f.quiet ? (f.quiet = !1,
            Hi(a)) : g !== d && Hi(a)
        }
    }
    function Fi(a, b) {
        Ai.push({
            consentTypes: a,
            Vj: b
        })
    }
    function Hi(a) {
        for (var b = 0; b < Ai.length; ++b) {
            var c = Ai[b];
            Ia(c.consentTypes) && -1 !== c.consentTypes.indexOf(a) && (c.gi = !0)
        }
    }
    function Gi(a, b) {
        for (var c = 0; c < Ai.length; ++c) {
            var d = Ai[c];
            if (d.gi) {
                d.gi = !1;
                try {
                    d.Vj({
                        consentEventId: a,
                        consentPriorityId: b
                    })
                } catch (e) {}
            }
        }
    }
    function Ii(a, b) {
        var c = a.entries[b] || {}
          , d = c.update;
        if (void 0 !== d)
            return d;
        d = c.initial;
        return void 0 !== d ? d : c.declare
    }
    var Ji = function(a) {
        var b = Bi();
        b.accessedAny = !0;
        return Ii(b, a)
    }
      , Ki = function(a) {
        var b = Bi();
        b.accessedDefault = !0;
        return (b.entries[a] || {}).initial
    }
      , Li = function(a) {
        return (Bi().entries[a] || {}).declare
    }
      , Mi = function(a) {
        var b = Bi();
        b.accessedAny = !0;
        return !(b.entries[a] || {}).quiet
    }
      , Ni = function() {
        if (!xi().h())
            return !1;
        var a = Bi();
        a.accessedAny = !0;
        return a.active
    }
      , Oi = function() {
        var a = Bi();
        a.accessedDefault = !0;
        return a.usedDefault
    }
      , Pi = function(a, b) {
        Bi().addListener(a, b)
    }
      , Qi = function(a, b) {
        Bi().notifyListeners(a, b)
    }
      , Ri = function(a, b) {
        function c() {
            for (var e = 0; e < b.length; e++)
                if (!Mi(b[e]))
                    return !0;
            return !1
        }
        if (c()) {
            var d = !1;
            Pi(b, function(e) {
                d || c() || (d = !0,
                a(e))
            })
        } else
            a({})
    }
      , Si = function(a, b) {
        function c() {
            for (var f = [], g = 0; g < d.length; g++) {
                var h = d[g];
                !1 === Ji(h) || e[h] || (f.push(h),
                e[h] = !0)
            }
            return f
        }
        var d = k(b) ? [b] : b
          , e = {};
        c().length !== d.length && Pi(d, function(f) {
            var g = c();
            0 < g.length && (f.consentTypes = g,
            a(f))
        })
    };
    var Ti = /:[0-9]+$/
      , Ui = /^\d+\.fls\.doubleclick\.net$/
      , Vi = function(a, b, c, d) {
        for (var e = [], f = a.split("&"), g = 0; g < f.length; g++) {
            var h = f[g].split("=");
            if (decodeURIComponent(h[0]).replace(/\+/g, " ") === b) {
                var l = h.slice(1).join("=");
                if (!c)
                    return d ? l : decodeURIComponent(l).replace(/\+/g, " ");
                e.push(d ? l : decodeURIComponent(l).replace(/\+/g, " "))
            }
        }
        return c ? e : void 0
    }
      , Yi = function(a, b, c, d, e) {
        b && (b = String(b).toLowerCase());
        if ("protocol" === b || "port" === b)
            a.protocol = Wi(a.protocol) || Wi(z.location.protocol);
        "port" === b ? a.port = String(Number(a.hostname ? a.port : z.location.port) || ("http" === a.protocol ? 80 : "https" === a.protocol ? 443 : "")) : "host" === b && (a.hostname = (a.hostname || z.location.hostname).replace(Ti, "").toLowerCase());
        return Xi(a, b, c, d, e)
    }
      , Xi = function(a, b, c, d, e) {
        var f, g = Wi(a.protocol);
        b && (b = String(b).toLowerCase());
        switch (b) {
        case "url_no_fragment":
            f = Zi(a);
            break;
        case "protocol":
            f = g;
            break;
        case "host":
            f = a.hostname.replace(Ti, "").toLowerCase();
            if (c) {
                var h = /^www\d*\./.exec(f);
                h && h[0] && (f = f.substr(h[0].length))
            }
            break;
        case "port":
            f = String(Number(a.port) || ("http" === g ? 80 : "https" === g ? 443 : ""));
            break;
        case "path":
            a.pathname || a.hostname || wb("TAGGING", 1);
            f = "/" === a.pathname.substr(0, 1) ? a.pathname : "/" + a.pathname;
            var l = f.split("/");
            0 <= (d || []).indexOf(l[l.length - 1]) && (l[l.length - 1] = "");
            f = l.join("/");
            break;
        case "query":
            f = a.search.replace("?", "");
            e && (f = Vi(f, e, !1));
            break;
        case "extension":
            var n = a.pathname.split(".");
            f = 1 < n.length ? n[n.length - 1] : "";
            f = f.split("/")[0];
            break;
        case "fragment":
            f = a.hash.replace("#", "");
            break;
        default:
            f = a && a.href
        }
        return f
    }
      , Wi = function(a) {
        return a ? a.replace(":", "").toLowerCase() : ""
    }
      , Zi = function(a) {
        var b = "";
        if (a && a.href) {
            var c = a.href.indexOf("#");
            b = 0 > c ? a.href : a.href.substr(0, c)
        }
        return b
    }
      , $i = function(a) {
        var b = H.createElement("a");
        a && (b.href = a);
        var c = b.pathname;
        "/" !== c[0] && (a || wb("TAGGING", 1),
        c = "/" + c);
        var d = b.hostname.replace(Ti, "");
        return {
            href: b.href,
            protocol: b.protocol,
            host: b.host,
            hostname: d,
            pathname: c,
            search: b.search,
            hash: b.hash,
            port: b.port
        }
    }
      , aj = function(a) {
        function b(n) {
            var p = n.split("=")[0];
            return 0 > d.indexOf(p) ? n : p + "=0"
        }
        function c(n) {
            return n.split("&").map(b).filter(function(p) {
                return void 0 !== p
            }).join("&")
        }
        var d = "gclid dclid gbraid wbraid gclaw gcldc gclha gclgf gclgb _gl".split(" ")
          , e = $i(a)
          , f = a.split(/[?#]/)[0]
          , g = e.search
          , h = e.hash;
        "?" === g[0] && (g = g.substring(1));
        "#" === h[0] && (h = h.substring(1));
        g = c(g);
        h = c(h);
        "" !== g && (g = "?" + g);
        "" !== h && (h = "#" + h);
        var l = "" + f + g + h;
        "/" === l[l.length - 1] && (l = l.substring(0, l.length - 1));
        return l
    }
      , bj = function(a) {
        var b = $i(z.location.href)
          , c = Yi(b, "host", !1);
        if (c && c.match(Ui)) {
            var d = Yi(b, "path").split(a + "=");
            if (1 < d.length)
                return d[1].split(";")[0].split("?")[0]
        }
    };
    var cj = function(a) {
        var b = 1, c, d, e;
        if (a)
            for (b = 0,
            d = a.length - 1; 0 <= d; d--)
                e = a.charCodeAt(d),
                b = (b << 6 & 268435455) + e + (e << 14),
                c = b & 266338304,
                b = 0 !== c ? b ^ c >> 21 : b;
        return b
    };
    var dj = function(a, b, c) {
        for (var d = [], e = b.split(";"), f = 0; f < e.length; f++) {
            var g = e[f].split("=")
              , h = g[0].replace(/^\s*|\s*$/g, "");
            if (h && h == a) {
                var l = g.slice(1).join("=").replace(/^\s*|\s*$/g, "");
                l && c && (l = decodeURIComponent(l));
                d.push(l)
            }
        }
        return d
    };
    var ej = function(a, b) {
        var c = function() {};
        c.prototype = a.prototype;
        var d = new c;
        a.apply(d, Array.prototype.slice.call(arguments, 1));
        return d
    }
      , fj = function(a) {
        var b = a;
        return function() {
            if (b) {
                var c = b;
                b = null;
                c()
            }
        }
    };
    function gj(a) {
        return "null" !== a.origin
    }
    ;var jj = function(a, b, c, d) {
        return hj(d) ? dj(a, String(b || ij()), c) : []
    }
      , mj = function(a, b, c, d, e) {
        if (hj(e)) {
            var f = kj(a, d, e);
            if (1 === f.length)
                return f[0].id;
            if (0 !== f.length) {
                f = lj(f, function(g) {
                    return g.ye
                }, b);
                if (1 === f.length)
                    return f[0].id;
                f = lj(f, function(g) {
                    return g.rd
                }, c);
                return f[0] ? f[0].id : void 0
            }
        }
    };
    function nj(a, b, c, d) {
        var e = ij()
          , f = window;
        gj(f) && (f.document.cookie = a);
        var g = ij();
        return e != g || void 0 != c && 0 <= jj(b, g, !1, d).indexOf(c)
    }
    var rj = function(a, b, c, d) {
        function e(w, x, y) {
            if (null == y)
                return delete h[x],
                w;
            h[x] = y;
            return w + "; " + x + "=" + y
        }
        function f(w, x) {
            if (null == x)
                return delete h[x],
                w;
            h[x] = !0;
            return w + "; " + x
        }
        if (!hj(c.nb))
            return 2;
        var g;
        void 0 == b ? g = a + "=deleted; expires=" + (new Date(0)).toUTCString() : (c.encode && (b = encodeURIComponent(b)),
        b = oj(b),
        g = a + "=" + b);
        var h = {};
        g = e(g, "path", c.path);
        var l;
        c.expires instanceof Date ? l = c.expires.toUTCString() : null != c.expires && (l = "" + c.expires);
        g = e(g, "expires", l);
        g = e(g, "max-age", c.Bk);
        g = e(g, "samesite", c.Uk);
        c.Wk && (g = f(g, "secure"));
        var n = c.domain;
        if (n && "auto" === n.toLowerCase()) {
            for (var p = pj(), q = void 0, r = !1, t = 0; t < p.length; ++t) {
                var u = "none" !== p[t] ? p[t] : void 0
                  , v = e(g, "domain", u);
                v = f(v, c.flags);
                try {
                    d && d(a, h)
                } catch (w) {
                    q = w;
                    continue
                }
                r = !0;
                if (!qj(u, c.path) && nj(v, a, b, c.nb))
                    return 0
            }
            if (q && !r)
                throw q;
            return 1
        }
        n && "none" !== n.toLowerCase() && (g = e(g, "domain", n));
        g = f(g, c.flags);
        d && d(a, h);
        return qj(n, c.path) ? 1 : nj(g, a, b, c.nb) ? 0 : 1
    }
      , sj = function(a, b, c) {
        null == c.path && (c.path = "/");
        c.domain || (c.domain = "auto");
        return rj(a, b, c)
    };
    function lj(a, b, c) {
        for (var d = [], e = [], f, g = 0; g < a.length; g++) {
            var h = a[g]
              , l = b(h);
            l === c ? d.push(h) : void 0 === f || l < f ? (e = [h],
            f = l) : l === f && e.push(h)
        }
        return 0 < d.length ? d : e
    }
    function kj(a, b, c) {
        for (var d = [], e = jj(a, void 0, void 0, c), f = 0; f < e.length; f++) {
            var g = e[f].split(".")
              , h = g.shift();
            if (!b || -1 !== b.indexOf(h)) {
                var l = g.shift();
                l && (l = l.split("-"),
                d.push({
                    id: g.join("."),
                    ye: 1 * l[0] || 1,
                    rd: 1 * l[1] || 1
                }))
            }
        }
        return d
    }
    var oj = function(a) {
        a && 1200 < a.length && (a = a.substring(0, 1200));
        return a
    }
      , tj = /^(www\.)?google(\.com?)?(\.[a-z]{2})?$/
      , uj = /(^|\.)doubleclick\.net$/i
      , qj = function(a, b) {
        return uj.test(window.document.location.hostname) || "/" === b && tj.test(a)
    }
      , ij = function() {
        return gj(window) ? window.document.cookie : ""
    }
      , pj = function() {
        var a = []
          , b = window.document.location.hostname.split(".");
        if (4 === b.length) {
            var c = b[b.length - 1];
            if (parseInt(c, 10).toString() === c)
                return ["none"]
        }
        for (var d = b.length - 2; 0 <= d; d--)
            a.push(b.slice(d).join("."));
        var e = window.document.location.hostname;
        uj.test(e) || tj.test(e) || a.push("none");
        return a
    }
      , hj = function(a) {
        if (!xi().h() || !a || !Ni())
            return !0;
        if (!Mi(a))
            return !1;
        var b = Ji(a);
        return null == b ? !0 : !!b
    };
    var vj = function(a) {
        var b = Math.round(2147483647 * Math.random());
        return a ? String(b ^ cj(a) & 2147483647) : String(b)
    }
      , wj = function(a) {
        return [vj(a), Math.round(Ua() / 1E3)].join(".")
    }
      , zj = function(a, b, c, d, e) {
        var f = xj(b);
        return mj(a, f, yj(c), d, e)
    }
      , Aj = function(a, b, c, d) {
        var e = "" + xj(c)
          , f = yj(d);
        1 < f && (e += "-" + f);
        return [b, e, a].join(".")
    }
      , xj = function(a) {
        if (!a)
            return 1;
        a = 0 === a.indexOf(".") ? a.substr(1) : a;
        return a.split(".").length
    }
      , yj = function(a) {
        if (!a || "/" === a)
            return 1;
        "/" !== a[0] && (a = "/" + a);
        "/" !== a[a.length - 1] && (a += "/");
        return a.split("/").length - 1
    };
    function Bj(a, b, c, d) {
        var e, f = Number(null != a.Bb ? a.Bb : void 0);
        0 !== f && (e = new Date((b || Ua()) + 1E3 * (f || 7776E3)));
        return {
            path: a.path,
            domain: a.domain,
            flags: a.flags,
            encode: !!c,
            expires: e,
            nb: d
        }
    }
    ;var Cj;
    var Gj = function() {
        var a = Dj
          , b = Ej
          , c = Fj()
          , d = function(g) {
            a(g.target || g.srcElement || {})
        }
          , e = function(g) {
            b(g.target || g.srcElement || {})
        };
        if (!c.init) {
            qc(H, "mousedown", d);
            qc(H, "keyup", d);
            qc(H, "submit", e);
            var f = HTMLFormElement.prototype.submit;
            HTMLFormElement.prototype.submit = function() {
                b(this);
                f.call(this)
            }
            ;
            c.init = !0
        }
    }
      , Hj = function(a, b, c, d, e) {
        var f = {
            callback: a,
            domains: b,
            fragment: 2 === c,
            placement: c,
            forms: d,
            sameHost: e
        };
        Fj().decorators.push(f)
    }
      , Ij = function(a, b, c) {
        for (var d = Fj().decorators, e = {}, f = 0; f < d.length; ++f) {
            var g = d[f], h;
            if (h = !c || g.forms)
                a: {
                    var l = g.domains
                      , n = a
                      , p = !!g.sameHost;
                    if (l && (p || n !== H.location.hostname))
                        for (var q = 0; q < l.length; q++)
                            if (l[q]instanceof RegExp) {
                                if (l[q].test(n)) {
                                    h = !0;
                                    break a
                                }
                            } else if (0 <= n.indexOf(l[q]) || p && 0 <= l[q].indexOf(n)) {
                                h = !0;
                                break a
                            }
                    h = !1
                }
            if (h) {
                var r = g.placement;
                void 0 == r && (r = g.fragment ? 2 : 1);
                r === b && Ya(e, g.callback())
            }
        }
        return e
    };
    function Fj() {
        var a = hc("google_tag_data", {})
          , b = a.gl;
        b && b.decorators || (b = {
            decorators: []
        },
        a.gl = b);
        return b
    }
    ;var Jj = /(.*?)\*(.*?)\*(.*)/
      , Kj = /^https?:\/\/([^\/]*?)\.?cdn\.ampproject\.org\/?(.*)/
      , Lj = /^(?:www\.|m\.|amp\.)+/
      , Mj = /([^?#]+)(\?[^#]*)?(#.*)?/;
    function Nj(a) {
        return new RegExp("(.*?)(^|&)" + a + "=([^&]*)&?(.*)")
    }
    var Pj = function(a) {
        var b = [], c;
        for (c in a)
            if (a.hasOwnProperty(c)) {
                var d = a[c];
                void 0 !== d && d === d && null !== d && "[object Object]" !== d.toString() && (b.push(c),
                b.push(tb(String(d))))
            }
        var e = b.join("*");
        return ["1", Oj(e), e].join("*")
    };
    function Oj(a, b) {
        var c = [fc.userAgent, (new Date).getTimezoneOffset(), fc.userLanguage || fc.language, Math.floor(Ua() / 60 / 1E3) - (void 0 === b ? 0 : b), a].join("*"), d;
        if (!(d = Cj)) {
            for (var e = Array(256), f = 0; 256 > f; f++) {
                for (var g = f, h = 0; 8 > h; h++)
                    g = g & 1 ? g >>> 1 ^ 3988292384 : g >>> 1;
                e[f] = g
            }
            d = e
        }
        Cj = d;
        for (var l = 4294967295, n = 0; n < c.length; n++)
            l = l >>> 8 ^ Cj[(l ^ c.charCodeAt(n)) & 255];
        return ((l ^ -1) >>> 0).toString(36)
    }
    function Qj() {
        return function(a) {
            var b = $i(z.location.href)
              , c = b.search.replace("?", "")
              , d = Vi(c, "_gl", !1, !0) || "";
            a.query = Rj(d) || {};
            var e = Yi(b, "fragment").match(Nj("_gl"));
            a.fragment = Rj(e && e[3] || "") || {}
        }
    }
    function Sj(a, b) {
        var c = Nj(a).exec(b)
          , d = b;
        if (c) {
            var e = c[2]
              , f = c[4];
            d = c[1];
            f && (d = d + e + f)
        }
        return d
    }
    var Tj = function(a, b) {
        b || (b = "_gl");
        var c = Mj.exec(a);
        if (!c)
            return "";
        var d = c[1]
          , e = Sj(b, (c[2] || "").slice(1))
          , f = Sj(b, (c[3] || "").slice(1));
        e.length && (e = "?" + e);
        f.length && (f = "#" + f);
        return "" + d + e + f
    }
      , Uj = function(a) {
        var b = Qj()
          , c = Fj();
        c.data || (c.data = {
            query: {},
            fragment: {}
        },
        b(c.data));
        var d = {}
          , e = c.data;
        e && (Ya(d, e.query),
        a && Ya(d, e.fragment));
        return d
    }
      , Rj = function(a) {
        try {
            var b = Vj(a, 3);
            if (void 0 !== b) {
                for (var c = {}, d = b ? b.split("*") : [], e = 0; e + 1 < d.length; e += 2) {
                    var f = d[e]
                      , g = ub(d[e + 1]);
                    c[f] = g
                }
                wb("TAGGING", 6);
                return c
            }
        } catch (h) {
            wb("TAGGING", 8)
        }
    };
    function Vj(a, b) {
        if (a) {
            var c;
            a: {
                for (var d = a, e = 0; 3 > e; ++e) {
                    var f = Jj.exec(d);
                    if (f) {
                        c = f;
                        break a
                    }
                    d = decodeURIComponent(d)
                }
                c = void 0
            }
            var g = c;
            if (g && "1" === g[1]) {
                var h = g[3], l;
                a: {
                    for (var n = g[2], p = 0; p < b; ++p)
                        if (n === Oj(h, p)) {
                            l = !0;
                            break a
                        }
                    l = !1
                }
                if (l)
                    return h;
                wb("TAGGING", 7)
            }
        }
    }
    function Wj(a, b, c, d) {
        function e(p) {
            p = Sj(a, p);
            var q = p.charAt(p.length - 1);
            p && "&" !== q && (p += "&");
            return p + n
        }
        d = void 0 === d ? !1 : d;
        var f = Mj.exec(c);
        if (!f)
            return "";
        var g = f[1]
          , h = f[2] || ""
          , l = f[3] || ""
          , n = a + "=" + b;
        d ? l = "#" + e(l.substring(1)) : h = "?" + e(h.substring(1));
        return "" + g + h + l
    }
    function Xj(a, b) {
        var c = "FORM" === (a.tagName || "").toUpperCase()
          , d = Ij(b, 1, c)
          , e = Ij(b, 2, c)
          , f = Ij(b, 3, c);
        if (Za(d)) {
            var g = Pj(d);
            c ? Yj("_gl", g, a) : Zj("_gl", g, a, !1)
        }
        if (!c && Za(e)) {
            var h = Pj(e);
            Zj("_gl", h, a, !0)
        }
        for (var l in f)
            if (f.hasOwnProperty(l))
                a: {
                    var n = l
                      , p = f[l]
                      , q = a;
                    if (q.tagName) {
                        if ("a" === q.tagName.toLowerCase()) {
                            Zj(n, p, q);
                            break a
                        }
                        if ("form" === q.tagName.toLowerCase()) {
                            Yj(n, p, q);
                            break a
                        }
                    }
                    "string" == typeof q && Wj(n, p, q)
                }
    }
    function Zj(a, b, c, d) {
        if (c.href) {
            var e = Wj(a, b, c.href, void 0 === d ? !1 : d);
            Gb.test(e) && (c.href = e)
        }
    }
    function Yj(a, b, c) {
        if (c && c.action) {
            var d = (c.method || "").toLowerCase();
            if ("get" === d) {
                for (var e = c.childNodes || [], f = !1, g = 0; g < e.length; g++) {
                    var h = e[g];
                    if (h.name === a) {
                        h.setAttribute("value", b);
                        f = !0;
                        break
                    }
                }
                if (!f) {
                    var l = H.createElement("input");
                    l.setAttribute("type", "hidden");
                    l.setAttribute("name", a);
                    l.setAttribute("value", b);
                    c.appendChild(l)
                }
            } else if ("post" === d) {
                var n = Wj(a, b, c.action);
                Gb.test(n) && (c.action = n)
            }
        }
    }
    function Dj(a) {
        try {
            var b;
            a: {
                for (var c = a, d = 100; c && 0 < d; ) {
                    if (c.href && c.nodeName.match(/^a(?:rea)?$/i)) {
                        b = c;
                        break a
                    }
                    c = c.parentNode;
                    d--
                }
                b = null
            }
            var e = b;
            if (e) {
                var f = e.protocol;
                "http:" !== f && "https:" !== f || Xj(e, e.hostname)
            }
        } catch (g) {}
    }
    function Ej(a) {
        try {
            if (a.action) {
                var b = Yi($i(a.action), "host");
                Xj(a, b)
            }
        } catch (c) {}
    }
    var ak = function(a, b, c, d) {
        Gj();
        Hj(a, b, "fragment" === c ? 2 : 1, !!d, !1)
    }
      , bk = function(a, b) {
        Gj();
        Hj(a, [Xi(z.location, "host", !0)], b, !0, !0)
    }
      , ck = function() {
        var a = H.location.hostname
          , b = Kj.exec(H.referrer);
        if (!b)
            return !1;
        var c = b[2]
          , d = b[1]
          , e = "";
        if (c) {
            var f = c.split("/")
              , g = f[1];
            e = "s" === g ? decodeURIComponent(f[2]) : decodeURIComponent(g)
        } else if (d) {
            if (0 === d.indexOf("xn--"))
                return !1;
            e = d.replace(/-/g, ".").replace(/\.\./g, "-")
        }
        var h = a.replace(Lj, ""), l = e.replace(Lj, ""), n;
        if (!(n = h === l)) {
            var p = "." + l;
            n = h.substring(h.length - p.length, h.length) === p
        }
        return n
    }
      , dk = function(a, b) {
        return !1 === a ? !1 : a || b || ck()
    };
    var ek = {}
      , fk = function(a) {
        return void 0 == ek[a] ? !1 : ek[a]
    };
    var gk = ["1"]
      , hk = {}
      , ik = {}
      , nk = function(a, b) {
        b = void 0 === b ? !0 : b;
        var c = jk(a.prefix);
        if (!hk[c])
            if (kk(c, a.path, a.domain)) {
                if (fk("enable_auid_cross_domain")) {
                    var d = ik[jk(a.prefix)];
                    lk(a, d ? d.id : void 0, d ? d.Zf : void 0)
                }
            } else {
                if (fk("enable_auid_fl_iframe")) {
                    var e = bj("auiddc");
                    if (e) {
                        wb("TAGGING", 17);
                        hk[c] = e;
                        return
                    }
                }
                if (b) {
                    var f = jk(a.prefix)
                      , g = wj();
                    if (0 === mk(f, g, a)) {
                        var h = hc("google_tag_data", {});
                        h._gcl_au || (h._gcl_au = g)
                    }
                    kk(c, a.path, a.domain)
                }
            }
    };
    function lk(a, b, c) {
        var d = jk(a.prefix)
          , e = hk[d];
        if (e) {
            var f = e.split(".");
            if (2 === f.length) {
                var g = Number(f[1]) || 0;
                if (g) {
                    var h = e;
                    b && (h = e + "." + b + "." + (c ? c : Math.floor(Ua() / 1E3)));
                    mk(d, h, a, 1E3 * g)
                }
            }
        }
    }
    function mk(a, b, c, d) {
        var e = Aj(b, "1", c.domain, c.path)
          , f = Bj(c, d);
        f.nb = "ad_storage";
        return sj(a, e, f)
    }
    function kk(a, b, c) {
        var d = zj(a, b, c, gk, "ad_storage");
        if (!d)
            return !1;
        ok(a, d);
        return !0
    }
    function ok(a, b) {
        var c = b.split(".");
        5 === c.length ? (hk[a] = c.slice(0, 2).join("."),
        ik[a] = {
            id: c.slice(2, 4).join("."),
            Zf: Number(c[4]) || 0
        }) : 3 === c.length ? ik[a] = {
            id: c.slice(0, 2).join("."),
            Zf: Number(c[2]) || 0
        } : hk[a] = b
    }
    function jk(a) {
        return (a || "_gcl") + "_au"
    }
    function pk(a) {
        Ni() || a();
        Ri(function() {
            Ji("ad_storage") && a();
            Si(a, "ad_storage")
        }, ["ad_storage"])
    }
    function qk(a) {
        var b = Uj(!0)
          , c = jk(a.prefix);
        pk(function() {
            var d = b[c];
            if (d) {
                ok(c, d);
                var e = 1E3 * Number(hk[c].split(".")[1]);
                if (e) {
                    wb("TAGGING", 16);
                    var f = Bj(a, e);
                    f.nb = "ad_storage";
                    var g = Aj(d, "1", a.domain, a.path);
                    sj(c, g, f)
                }
            }
        })
    }
    function rk(a, b, c, d) {
        d = d || {};
        var e = function() {
            var f = jk(d.prefix)
              , g = {}
              , h = zj(f, d.path, d.domain, gk, "ad_storage");
            if (!h)
                return g;
            g[f] = h;
            return g
        };
        pk(function() {
            ak(e, a, b, c)
        })
    }
    ;var sk = [];
    sk[7] = !0;
    sk[9] = !0;
    sk[27] = !0;
    sk[11] = !0;
    sk[13] = !0;
    sk[15] = !0;
    sk[16] = !0;
    sk[25] = !0;
    sk[36] = !0;
    sk[38] = !0;
    sk[39] = !0;
    sk[40] = !0;
    sk[41] = !0;
    sk[43] = !0;
    sk[52] = !0;
    sk[57] = !0;
    sk[58] = !0;
    sk[59] = !0;
    sk[60] = !0;
    sk[61] = !0;
    sk[68] = !0;
    sk[69] = !0;
    sk[72] = !0;
    sk[75] = !0;
    sk[76] = !0;
    sk[77] = !0;
    sk[79] = !0;
    sk[83] = !0;
    sk[88] = !0;
    sk[89] = !0;
    sk[90] = !0;
    sk[91] = !0;
    sk[93] = !0;
    sk[94] = !0;
    sk[96] = !0;
    var U = function(a) {
        return !!sk[a]
    };
    var uk = tk();
    function tk() {
        if (!U(87))
            return {};
        try {
            return JSON.parse(ub("eyIwIjoiSUQiLCIxIjoiSUQtU1UiLCIyIjpmYWxzZSwiMyI6Imdvb2dsZS5jby5pZCIsIjQiOiIiLCI1Ijp0cnVlfQ"))
        } catch (a) {
            return R(123),
            wb("HEALTH", 2),
            {}
        }
    }
    var vk = {
        Mj: "ID",
        Nk: "ID-SU",
        lk: "true",
        Wj: ""
    }
      , wk = function() {
        var a;
        return U(87) ? null != (a = uk["0"]) ? a : "" : vk.Mj
    }
      , xk = function() {
        var a;
        return U(87) ? null != (a = uk["1"]) ? a : "" : vk.Nk
    }
      , yk = function() {
        var a = "";
        var b;
        a = U(87) ? null != (b = uk["4"]) ? b : "" : vk.Wj;
        return a
    }
      , zk = function() {
        var a = !1;
        var b;
        a = U(87) ? null != (b = uk["5"]) ? b : !1 : "true" === vk.lk;
        return a
    };
    var Ak, Bk = !1;
    function Ck() {
        Bk = !0;
        Ak = Ak || {}
    }
    var Dk = function(a) {
        Bk || Ck();
        return Ak[a]
    };
    var Ek = function() {
        var a = z.screen;
        return {
            width: a ? a.width : 0,
            height: a ? a.height : 0
        }
    }
      , Fk = function(a) {
        if (H.hidden)
            return !0;
        var b = a.getBoundingClientRect();
        if (b.top == b.bottom || b.left == b.right || !z.getComputedStyle)
            return !0;
        var c = z.getComputedStyle(a, null);
        if ("hidden" === c.visibility)
            return !0;
        for (var d = a, e = c; d; ) {
            if ("none" === e.display)
                return !0;
            var f = e.opacity
              , g = e.filter;
            if (g) {
                var h = g.indexOf("opacity(");
                0 <= h && (g = g.substring(h + 8, g.indexOf(")", h)),
                "%" == g.charAt(g.length - 1) && (g = g.substring(0, g.length - 1)),
                f = Math.min(g, f))
            }
            if (void 0 !== f && 0 >= f)
                return !0;
            (d = d.parentElement) && (e = z.getComputedStyle(d, null))
        }
        return !1
    };
    var Gk = function() {
        var a = H.body, b = H.documentElement || a && a.parentElement, c, d;
        if (H.compatMode && "BackCompat" !== H.compatMode)
            c = b ? b.clientHeight : 0,
            d = b ? b.clientWidth : 0;
        else {
            var e = function(f, g) {
                return f && g ? Math.min(f, g) : Math.max(f, g)
            };
            c = e(b ? b.clientHeight : 0, a ? a.clientHeight : 0);
            d = e(b ? b.clientWidth : 0, a ? a.clientWidth : 0)
        }
        return {
            width: d,
            height: c
        }
    }
      , Hk = function(a) {
        var b = Gk()
          , c = b.height
          , d = b.width
          , e = a.getBoundingClientRect()
          , f = e.bottom - e.top
          , g = e.right - e.left;
        return f && g ? (1 - Math.min((Math.max(0 - e.left, 0) + Math.max(e.right - d, 0)) / g, 1)) * (1 - Math.min((Math.max(0 - e.top, 0) + Math.max(e.bottom - c, 0)) / f, 1)) : 0
    };
    var Ik = []
      , Jk = !(!z.IntersectionObserver || !z.IntersectionObserverEntry)
      , Kk = function(a, b, c) {
        for (var d = new z.IntersectionObserver(a,{
            threshold: c
        }), e = 0; e < b.length; e++)
            d.observe(b[e]);
        for (var f = 0; f < Ik.length; f++)
            if (!Ik[f])
                return Ik[f] = d,
                f;
        return Ik.push(d) - 1
    }
      , Lk = function(a, b, c) {
        function d(h, l) {
            var n = {
                top: 0,
                bottom: 0,
                right: 0,
                left: 0,
                width: 0,
                height: 0
            }
              , p = {
                boundingClientRect: h.getBoundingClientRect(),
                intersectionRatio: l,
                intersectionRect: n,
                isIntersecting: 0 < l,
                rootBounds: n,
                target: h,
                time: Ua()
            };
            J(function() {
                return a(p)
            })
        }
        for (var e = [], f = [], g = 0; g < b.length; g++)
            e.push(0),
            f.push(-1);
        c.sort(function(h, l) {
            return h - l
        });
        return function() {
            for (var h = 0; h < b.length; h++) {
                var l = Hk(b[h]);
                if (l > e[h])
                    for (; f[h] < c.length - 1 && l >= c[f[h] + 1]; )
                        d(b[h], l),
                        f[h]++;
                else if (l < e[h])
                    for (; 0 <= f[h] && l <= c[f[h]]; )
                        d(b[h], l),
                        f[h]--;
                e[h] = l
            }
        }
    }
      , Mk = function(a, b, c) {
        for (var d = 0; d < c.length; d++)
            1 < c[d] ? c[d] = 1 : 0 > c[d] && (c[d] = 0);
        if (Jk) {
            var e = !1;
            J(function() {
                e || Lk(a, b, c)()
            });
            return Kk(function(f) {
                e = !0;
                for (var g = {
                    wc: 0
                }; g.wc < f.length; g = {
                    wc: g.wc
                },
                g.wc++)
                    J(function(h) {
                        return function() {
                            return a(f[h.wc])
                        }
                    }(g))
            }, b, c)
        }
        return z.setInterval(Lk(a, b, c), 1E3)
    }
      , Nk = function(a) {
        Jk ? 0 <= a && a < Ik.length && Ik[a] && (Ik[a].disconnect(),
        Ik[a] = void 0) : z.clearInterval(a)
    };
    var Pk = function(a, b, c) {
        if (a) {
            var d = a.element
              , e = {
                Za: a.Za,
                tagName: d.tagName,
                type: 1
            };
            b && (e.querySelector = Ok(d));
            c && (e.isVisible = !Fk(d));
            return e
        }
    }
      , Sk = function(a) {
        if (0 != a.length) {
            var b;
            b = Qk(a, function(c) {
                return !Rk.test(c.Za)
            });
            b = Qk(b, function(c) {
                return "INPUT" === c.element.tagName.toUpperCase()
            });
            b = Qk(b, function(c) {
                return !Fk(c.element)
            });
            return b[0]
        }
    }
      , Qk = function(a, b) {
        if (1 >= a.length)
            return a;
        var c = a.filter(b);
        return 0 == c.length ? a : c
    }
      , Ok = function(a) {
        var b;
        if (a === H.body)
            b = "body";
        else {
            var c;
            if (a.id)
                c = "#" + a.id;
            else {
                var d;
                if (a.parentElement) {
                    var e;
                    a: {
                        var f = a.parentElement;
                        if (f) {
                            for (var g = 0; g < f.childElementCount; g++)
                                if (f.children[g] === a) {
                                    e = g + 1;
                                    break a
                                }
                            e = -1
                        } else
                            e = 1
                    }
                    d = Ok(a.parentElement) + ">:nth-child(" + e + ")"
                } else
                    d = "";
                c = d
            }
            b = c
        }
        return b
    }
      , Tk = !0
      , Uk = !1;
    var Vk = /[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}/i
      , Wk = /@(gmail|googlemail)\./i
      , Rk = /support|noreply/i
      , Xk = "SCRIPT STYLE IMG SVG PATH BR NOSCRIPT TEXTAREA".split(" ")
      , Yk = ["BR"]
      , Zk = {}
      , $k = function(a) {
        a = a || {
            qc: !0,
            sc: !0
        };
        a.jb = a.jb || {
            email: !0,
            phone: !0,
            address: !0
        };
        var b, c = a, d = !!c.qc + "." + !!c.sc;
        c && c.dd && c.dd.length && (d += "." + c.dd.join("."));
        c && c.jb && (d += "." + c.jb.email + "." + c.jb.phone + "." + c.jb.address);
        b = d;
        var e = Zk[b];
        if (e && 200 > Ua() - e.timestamp)
            return e.result;
        var f;
        var g = []
          , h = H.body;
        if (h) {
            for (var l = h.querySelectorAll("*"), n = 0; n < l.length && 1E4 > n; n++) {
                var p = l[n];
                if (!(0 <= Xk.indexOf(p.tagName.toUpperCase())) && p.children instanceof HTMLCollection) {
                    for (var q = !1, r = 0; r < p.childElementCount && 1E4 > r; r++)
                        if (!(0 <= Yk.indexOf(p.children[r].tagName.toUpperCase()))) {
                            q = !0;
                            break
                        }
                    q || g.push(p)
                }
            }
            f = {
                elements: g,
                status: 1E4 < l.length ? "2" : "1"
            }
        } else
            f = {
                elements: g,
                status: "4"
            };
        var t = f, u = t.status, v = [], w;
        if (a.jb && a.jb.email) {
            for (var x = t.elements, y = [], A = 0; A < x.length; A++) {
                var B = x[A]
                  , C = B.textContent;
                "INPUT" === B.tagName.toUpperCase() && B.value && (C = B.value);
                if (C) {
                    var D = C.match(Vk);
                    if (D) {
                        var I = D[0], G;
                        if (z.location) {
                            var O = Xi(z.location, "host", !0);
                            G = 0 <= I.toLowerCase().indexOf(O)
                        } else
                            G = !1;
                        G || y.push({
                            element: B,
                            Za: I
                        })
                    }
                }
            }
            var Q = a && a.dd;
            if (Q && 0 !== Q.length) {
                for (var aa = [], oa = 0; oa < y.length; oa++) {
                    for (var P = !0, S = 0; S < Q.length; S++) {
                        var ka = Q[S];
                        if (ka && Ug(y[oa].element, ka)) {
                            P = !1;
                            break
                        }
                    }
                    P && aa.push(y[oa])
                }
                v = aa
            } else
                v = y;
            w = Sk(v);
            10 < y.length && (u = "3")
        }
        var fa = [];
        !a.mi && w && (v = [w]);
        for (var ba = 0; ba < v.length; ba++)
            fa.push(Pk(v[ba], a.qc, a.sc));
        var Fa = {
            elements: fa.slice(0, 10),
            kg: Pk(w, a.qc, a.sc),
            status: u
        };
        Zk[b] = {
            timestamp: Ua(),
            result: Fa
        };
        return Fa
    }
      , al = function(a) {
        return a.tagName + ":" + a.isVisible + ":" + a.Za.length + ":" + Wk.test(a.Za)
    };
    var bl = function(a, b, c) {
        if (!c)
            return !1;
        var d = c.selector_type, e = String(c.value), f;
        if ("js_variable" === d) {
            e = e.replace(/\["?'?/g, ".").replace(/"?'?\]/g, "");
            for (var g = e.split(","), h = 0; h < g.length; h++) {
                var l = g[h].trim();
                if (l) {
                    if (0 === l.indexOf("dataLayer."))
                        f = oi(l.substring(10));
                    else {
                        var n = l.split(".");
                        f = z[n.shift()];
                        for (var p = 0; p < n.length; p++)
                            f = f && f[n[p]]
                    }
                    if (void 0 !== f)
                        break
                }
            }
        } else if ("css_selector" === d && Sg) {
            var q = Tg(e);
            if (q && 0 < q.length) {
                f = [];
                for (var r = 0; r < q.length && r < ("email" === b || "phone_number" === b ? 5 : 1); r++)
                    f.push(tc(q[r]) || Sa(q[r].value));
                f = 1 === f.length ? f[0] : f
            }
        }
        return f ? (a[b] = f,
        !0) : !1
    }
      , cl = function(a) {
        if (a) {
            var b = {}
              , c = !1;
            c = bl(b, "email", a.email) || c;
            c = bl(b, "phone_number", a.phone) || c;
            b.address = [];
            for (var d = a.name_and_address || [], e = 0; e < d.length; e++) {
                var f = {};
                c = bl(f, "first_name", d[e].first_name) || c;
                c = bl(f, "last_name", d[e].last_name) || c;
                c = bl(f, "street", d[e].street) || c;
                c = bl(f, "city", d[e].city) || c;
                c = bl(f, "region", d[e].region) || c;
                c = bl(f, "country", d[e].country) || c;
                c = bl(f, "postal_code", d[e].postal_code) || c;
                b.address.push(f)
            }
            return c ? b : void 0
        }
    }
      , dl = function(a) {
        return a.B[T.g.vf]
    }
      , el = function(a) {
        var b = V(a, T.g.Nc) || {}
          , c = !1;
        m(b, function(d, e) {
            var f = e.enhanced_conversions_mode;
            if ("automatic" === f || "manual" === f)
                c = !0
        });
        return c
    }
      , fl = function(a) {
        if (!Qc(a))
            return !1;
        var b = a.mode;
        return "auto_detect" === b || "selectors" === b || "code" === b || !!a.enable_code
    }
      , gl = function(a) {
        if (a) {
            if ("selectors" === a.mode || Qc(a.selectors))
                return cl(a.selectors);
            if ("auto_detect" === a.mode || Qc(a.auto_detect)) {
                var b;
                var c = a.auto_detect;
                if (c) {
                    var d = $k({
                        qc: !1,
                        sc: !1,
                        dd: c.exclude_element_selectors,
                        jb: {
                            email: !!c.email,
                            phone: !!c.phone,
                            address: !!c.address
                        }
                    }).elements
                      , e = {};
                    if (0 < d.length)
                        for (var f = 0; f < d.length; f++) {
                            var g = d[f];
                            if (1 === g.type) {
                                e.email = g.Za;
                                break
                            }
                        }
                    b = e
                } else
                    b = void 0;
                return b
            }
        }
    };
    function kl() {}
    function ll() {}
    ;function ml(a) {
        for (var b = [], c = 0; c < nl.length; c++) {
            var d = a(nl[c]);
            b[c] = !0 === d ? "1" : !1 === d ? "0" : "-"
        }
        return b.join("")
    }
    var nl = [T.g.I, T.g.U]
      , ol = function(a) {
        for (var b = a[T.g.Vb], c = Array.isArray(b) ? b : [b], d = {
            xc: 0
        }; d.xc < c.length; d = {
            xc: d.xc
        },
        ++d.xc)
            m(a, function(e) {
                return function(f, g) {
                    if (f !== T.g.Vb) {
                        var h = c[e.xc]
                          , l = wk()
                          , n = xk();
                        zi = !0;
                        yi && wb("TAGGING", 20);
                        Bi().declare(f, g, h, l, n)
                    }
                }
            }(d))
    }
      , pl = function(a) {
        var b = a[T.g.Vb];
        b && R(40);
        var c = a[T.g.Ne];
        c && R(41);
        for (var d = Ia(b) ? b : [b], e = {
            yc: 0
        }; e.yc < d.length; e = {
            yc: e.yc
        },
        ++e.yc)
            m(a, function(f) {
                return function(g, h) {
                    if (g !== T.g.Vb && g !== T.g.Ne) {
                        var l = d[f.yc]
                          , n = Number(c)
                          , p = wk()
                          , q = xk();
                        yi = !0;
                        zi && wb("TAGGING", 20);
                        Bi().set(g, h, l, p, q, n)
                    }
                }
            }(e))
    }
      , ql = function(a, b) {
        m(a, function(c, d) {
            yi = !0;
            zi && wb("TAGGING", 20);
            Bi().update(c, d)
        });
        Qi(b.eventId, b.priorityId)
    }
      , rl = function(a) {
        var b = Ji(a);
        return void 0 != b ? b : !0
    }
      , sl = function() {
        return "G1" + ml(Ji)
    }
      , tl = function(a, b) {
        Pi(a, b)
    }
      , ul = function(a, b) {
        Si(a, b)
    }
      , vl = function(a, b) {
        Ri(a, b)
    };
    var wl = function() {
        Ih.dedupe_gclid || (Ih.dedupe_gclid = "" + wj());
        return Ih.dedupe_gclid
    };
    var xl = function() {
        var a = !1;
        return a
    };
    var L = {
        C: "G-F7BELJZMSZ",
        rb: "68397105"
    }
      , yl = {
        ei: "G-F7BELJZMSZ",
        fi: "G-F7BELJZMSZ"
    };
    L.zf = Qa("");
    var zl = function() {
        return yl.ei ? yl.ei.split("|") : [L.C]
    }
      , Al = function() {
        return yl.fi ? yl.fi.split("|") : []
    }
      , Bl = function() {
        this.container = {};
        this.destination = {};
        this.canonical = {}
    }
      , Ul = function() {
        for (var a = Cl(), b = zl(), c = 0; c < b.length; c++) {
            var d = a.container[b[c]];
            !d || Ha(d) ? a.container[b[c]] = {
                state: 2
            } : d.state = 2
        }
        for (var e = Al(), f = 0; f < e.length; f++) {
            var g = a.destination[e[f]];
            g && 0 === g.state && R(93);
            g ? g.state = 2 : a.destination[e[f]] = {
                state: 2
            }
        }
        a.canonical[L.rb] = 2
    }
      , Vl = function(a) {
        return !!Cl().container[a]
    }
      , Wl = function() {
        var a = Cl().container, b;
        for (b in a)
            if (a.hasOwnProperty(b)) {
                var c = a[b];
                if (Ha(c)) {
                    if (1 === c)
                        return !0
                } else if (1 === c.state)
                    return !0
            }
        return !1
    }
      , Xl = function() {
        var a = {};
        m(Cl().destination, function(b, c) {
            0 === c.state && (a[b] = c)
        });
        return a
    };
    function Cl() {
        var a = Ih.tidr;
        a || (a = new Bl,
        Ih.tidr = a);
        return a
    }
    var Yl = {
        UA: 1,
        AW: 2,
        DC: 3,
        G: 4,
        GF: 5,
        GT: 12,
        GTM: 14,
        HA: 6,
        MC: 7
    }
      , Zl = function(a) {
        var b = L.C.split("-")[0].toUpperCase()
          , c = {};
        c.Oj = L.C;
        c.Rk = Hh.Xc;
        c.Tk = Hh.Bf;
        c.zk = L.zf ? 2 : 1;
        Oh ? (c.Je = Yl[b],
        c.Je || (c.Je = 0)) : c.Je = ai ? 13 : 10;
        Zh ? c.cg = 1 : xl() ? c.cg = 2 : c.cg = 3;
        var d;
        var e = c.Je
          , f = c.cg;
        void 0 === e ? d = "" : (f || (f = 0),
        d = "" + dg(1, 1) + "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_"[e << 2 | f]);
        var g = c.Gl, h = 4 + d + (g ? "" + dg(2, 1) + "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_"[g] : ""), l, n = c.Tk;
        l = n && cg.test(n) ? "" + dg(3, 2) + n : "";
        var p, q = c.Rk;
        p = q ? "" + dg(4, 1) + "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_"[q] : "";
        var r;
        var t = c.Oj;
        if (t && a) {
            var u = t.split("-")
              , v = u[0].toUpperCase();
            if ("GTM" !== v && "OPT" !== v)
                r = "";
            else {
                var w = u[1];
                r = "" + dg(5, 3) + "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_"[1 + w.length] + (c.zk || 0) + w
            }
        } else
            r = "";
        return h + l + p + r
    };
    function $l(a, b) {
        if ("" === a)
            return b;
        var c = Number(a);
        return isNaN(c) ? b : c
    }
    ;var am = function(a, b, c) {
        a.addEventListener && a.addEventListener(b, c, !1)
    };
    function bm() {
        return Hb ? !!Ob && !!Ob.platform : !1
    }
    function cm() {
        return Rb("iPhone") && !Rb("iPod") && !Rb("iPad")
    }
    function dm() {
        cm() || Rb("iPad") || Rb("iPod")
    }
    ;Tb();
    Sb() || Rb("Trident") || Rb("MSIE");
    Rb("Edge");
    !Rb("Gecko") || -1 != Nb().toLowerCase().indexOf("webkit") && !Rb("Edge") || Rb("Trident") || Rb("MSIE") || Rb("Edge");
    -1 != Nb().toLowerCase().indexOf("webkit") && !Rb("Edge") && Rb("Mobile");
    bm() || Rb("Macintosh");
    bm() || Rb("Windows");
    (bm() ? "Linux" === Ob.platform : Rb("Linux")) || bm() || Rb("CrOS");
    var em = qa.navigator || null;
    em && (em.appVersion || "").indexOf("X11");
    bm() || Rb("Android");
    cm();
    Rb("iPad");
    Rb("iPod");
    dm();
    Nb().toLowerCase().indexOf("kaios");
    var fm = function(a, b, c, d) {
        for (var e = b, f = c.length; 0 <= (e = a.indexOf(c, e)) && e < d; ) {
            var g = a.charCodeAt(e - 1);
            if (38 == g || 63 == g) {
                var h = a.charCodeAt(e + f);
                if (!h || 61 == h || 38 == h || 35 == h)
                    return e
            }
            e += f + 1
        }
        return -1
    }
      , gm = /#|$/
      , hm = function(a, b) {
        var c = a.search(gm)
          , d = fm(a, 0, b, c);
        if (0 > d)
            return null;
        var e = a.indexOf("&", d);
        if (0 > e || e > c)
            e = c;
        d += b.length + 1;
        return decodeURIComponent(a.slice(d, -1 !== e ? e : 0).replace(/\+/g, " "))
    }
      , im = /[?&]($|#)/
      , jm = function(a, b, c) {
        for (var d, e = a.search(gm), f = 0, g, h = []; 0 <= (g = fm(a, f, b, e)); )
            h.push(a.substring(f, g)),
            f = Math.min(a.indexOf("&", g) + 1 || e, e);
        h.push(a.slice(f));
        d = h.join("").replace(im, "$1");
        var l, n = null != c ? "=" + encodeURIComponent(String(c)) : "";
        var p = b + n;
        if (p) {
            var q, r = d.indexOf("#");
            0 > r && (r = d.length);
            var t = d.indexOf("?"), u;
            0 > t || t > r ? (t = r,
            u = "") : u = d.substring(t + 1, r);
            q = [d.slice(0, t), u, d.slice(r)];
            var v = q[1];
            q[1] = p ? v ? v + "&" + p : p : v;
            l = q[0] + (q[1] ? "?" + q[1] : "") + q[2]
        } else
            l = d;
        return l
    };
    var km = function(a) {
        try {
            var b;
            if (b = !!a && null != a.location.href)
                a: {
                    try {
                        vi(a.foo);
                        b = !0;
                        break a
                    } catch (c) {}
                    b = !1
                }
            return b
        } catch (c) {
            return !1
        }
    }
      , lm = function(a, b) {
        if (a)
            for (var c in a)
                Object.prototype.hasOwnProperty.call(a, c) && b(a[c], c, a)
    };
    function mm() {
        if (!H.head)
            return null;
        var a = nm("META");
        H.head.appendChild(a);
        a.httpEquiv = "origin-trial";
        a.content = 'A727AcAeLCei/ZogJHBlJUS63SxP6AeIROo7qXrkjrxkoxBu0eSSmypAHmGYwk4HjBMQp5nxCFODzfVnUIe31AQAAAB7eyJvcmlnaW4iOiJodHRwczovL3d3dy5nb29nbGV0YWdtYW5hZ2VyLmNvbTo0NDMiLCJmZWF0dXJlIjoiUHJpdmFjeVNhbmRib3hBZHNBUElzIiwiZXhwaXJ5IjoxNjg4MDgzMTk5LCJpc1RoaXJkUGFydHkiOnRydWV9';
        return a
    }
    var om = function() {
        if (z.top == z)
            return 0;
        var a = z.location.ancestorOrigins;
        return a ? a[a.length - 1] == z.location.origin ? 1 : 2 : km(z.top) ? 1 : 2
    }
      , nm = function(a, b) {
        b = void 0 === b ? document : b;
        return b.createElement(String(a).toLowerCase())
    };
    function pm(a, b, c, d) {
        d = void 0 === d ? !1 : d;
        a.google_image_requests || (a.google_image_requests = []);
        var e = nm("IMG", a.document);
        if (c) {
            var f = function() {
                if (c) {
                    var g = a.google_image_requests
                      , h = zb(g, e);
                    0 <= h && Array.prototype.splice.call(g, h, 1)
                }
                e.removeEventListener && e.removeEventListener("load", f, !1);
                e.removeEventListener && e.removeEventListener("error", f, !1)
            };
            am(e, "load", f);
            am(e, "error", f)
        }
        d && (e.attributionSrc = "");
        e.src = b;
        a.google_image_requests.push(e)
    }
    var rm = function(a) {
        var b;
        b = void 0 === b ? !1 : b;
        var c = "https://pagead2.googlesyndication.com/pagead/gen_204?id=tcfe";
        lm(a, function(d, e) {
            if (d || 0 === d)
                c += "&" + e + "=" + encodeURIComponent("" + d)
        });
        qm(c, b)
    }
      , qm = function(a, b) {
        var c = window, d;
        b = void 0 === b ? !1 : b;
        d = void 0 === d ? !1 : d;
        if (c.fetch) {
            var e = {
                keepalive: !0,
                credentials: "include",
                redirect: "follow",
                method: "get",
                mode: "no-cors"
            };
            d && (e.mode = "cors",
            e.headers = {
                "Attribution-Reporting-Eligible": "event-source"
            });
            c.fetch(a, e)
        } else
            pm(c, a, void 0 === b ? !1 : b, void 0 === d ? !1 : d)
    };
    var sm = function() {};
    var tm = function(a) {
        void 0 !== a.addtlConsent && "string" !== typeof a.addtlConsent && (a.addtlConsent = void 0);
        void 0 !== a.gdprApplies && "boolean" !== typeof a.gdprApplies && (a.gdprApplies = void 0);
        return void 0 !== a.tcString && "string" !== typeof a.tcString || void 0 !== a.listenerId && "number" !== typeof a.listenerId ? 2 : a.cmpStatus && "error" !== a.cmpStatus ? 0 : 3
    }
      , um = function(a, b) {
        b = void 0 === b ? {} : b;
        this.m = a;
        this.h = null;
        this.K = {};
        this.ab = 0;
        var c;
        this.R = null != (c = b.kl) ? c : 500;
        var d;
        this.D = null != (d = b.Hl) ? d : !1;
        this.B = null
    };
    pa(um, sm);
    um.prototype.addEventListener = function(a) {
        var b = this
          , c = {
            internalBlockOnErrors: this.D
        }
          , d = fj(function() {
            return a(c)
        })
          , e = 0;
        -1 !== this.R && (e = setTimeout(function() {
            c.tcString = "tcunavailable";
            c.internalErrorState = 1;
            d()
        }, this.R));
        var f = function(g, h) {
            clearTimeout(e);
            g ? (c = g,
            c.internalErrorState = tm(c),
            c.internalBlockOnErrors = b.D,
            h && 0 === c.internalErrorState || (c.tcString = "tcunavailable",
            h || (c.internalErrorState = 3))) : (c.tcString = "tcunavailable",
            c.internalErrorState = 3);
            a(c)
        };
        try {
            vm(this, "addEventListener", f)
        } catch (g) {
            c.tcString = "tcunavailable",
            c.internalErrorState = 3,
            e && (clearTimeout(e),
            e = 0),
            d()
        }
    }
    ;
    um.prototype.removeEventListener = function(a) {
        a && a.listenerId && vm(this, "removeEventListener", null, a.listenerId)
    }
    ;
    var xm = function(a, b, c) {
        var d;
        d = void 0 === d ? "755" : d;
        var e;
        a: {
            if (a.publisher && a.publisher.restrictions) {
                var f = a.publisher.restrictions[b];
                if (void 0 !== f) {
                    e = f[void 0 === d ? "755" : d];
                    break a
                }
            }
            e = void 0
        }
        var g = e;
        if (0 === g)
            return !1;
        var h = c;
        2 === c ? (h = 0,
        2 === g && (h = 1)) : 3 === c && (h = 1,
        1 === g && (h = 0));
        var l;
        if (0 === h)
            if (a.purpose && a.vendor) {
                var n = wm(a.vendor.consents, void 0 === d ? "755" : d);
                l = n && "1" === b && a.purposeOneTreatment && "CH" === a.publisherCC ? !0 : n && wm(a.purpose.consents, b)
            } else
                l = !0;
        else
            l = 1 === h ? a.purpose && a.vendor ? wm(a.purpose.legitimateInterests, b) && wm(a.vendor.legitimateInterests, void 0 === d ? "755" : d) : !0 : !0;
        return l
    }
      , wm = function(a, b) {
        return !(!a || !a[b])
    }
      , vm = function(a, b, c, d) {
        c || (c = function() {}
        );
        if ("function" === typeof a.m.__tcfapi) {
            var e = a.m.__tcfapi;
            e(b, 2, c, d)
        } else if (ym(a)) {
            zm(a);
            var f = ++a.ab;
            a.K[f] = c;
            if (a.h) {
                var g = {};
                a.h.postMessage((g.__tcfapiCall = {
                    command: b,
                    version: 2,
                    callId: f,
                    parameter: d
                },
                g), "*")
            }
        } else
            c({}, !1)
    }
      , ym = function(a) {
        if (a.h)
            return a.h;
        var b;
        a: {
            for (var c = a.m, d = 0; 50 > d; ++d) {
                var e;
                try {
                    e = !(!c.frames || !c.frames.__tcfapiLocator)
                } catch (h) {
                    e = !1
                }
                if (e) {
                    b = c;
                    break a
                }
                var f;
                b: {
                    try {
                        var g = c.parent;
                        if (g && g != c) {
                            f = g;
                            break b
                        }
                    } catch (h) {}
                    f = null
                }
                if (!(c = f))
                    break
            }
            b = null
        }
        a.h = b;
        return a.h
    }
      , zm = function(a) {
        a.B || (a.B = function(b) {
            try {
                var c;
                c = ("string" === typeof b.data ? JSON.parse(b.data) : b.data).__tcfapiReturn;
                a.K[c.callId](c.returnValue, c.success)
            } catch (d) {}
        }
        ,
        am(a.m, "message", a.B))
    }
      , Am = function(a) {
        if (!1 === a.gdprApplies)
            return !0;
        void 0 === a.internalErrorState && (a.internalErrorState = tm(a));
        return "error" === a.cmpStatus || 0 !== a.internalErrorState ? a.internalBlockOnErrors ? (rm({
            e: String(a.internalErrorState)
        }),
        !1) : !0 : "loaded" !== a.cmpStatus || "tcloaded" !== a.eventStatus && "useractioncomplete" !== a.eventStatus ? !1 : !0
    };
    var Bm = {
        1: 0,
        3: 0,
        4: 0,
        7: 3,
        9: 3,
        10: 3
    }
      , Cm = $l('', 500);
    function Dm() {
        var a = Ih.tcf || {};
        return Ih.tcf = a
    }
    var Jm = function() {
        var a = Dm()
          , b = new um(z,{
            kl: -1
        });
        Em(b) && Fm() && R(124);
        if (!Fm() && !a.active && Em(b)) {
            a.active = !0;
            a.Fe = {};
            Gm();
            a.tcString = "tcunavailable";
            try {
                b.addEventListener(function(c) {
                    if (0 !== c.internalErrorState)
                        Hm(a),
                        Im(a);
                    else {
                        var d;
                        a.gdprApplies = c.gdprApplies;
                        if (!1 === c.gdprApplies) {
                            var e = {}, f;
                            for (f in Bm)
                                Bm.hasOwnProperty(f) && (e[f] = !0);
                            d = e;
                            b.removeEventListener(c)
                        } else if ("tcloaded" === c.eventStatus || "useractioncomplete" === c.eventStatus || "cmpuishown" === c.eventStatus) {
                            var g = {}, h;
                            for (h in Bm)
                                if (Bm.hasOwnProperty(h))
                                    if ("1" === h) {
                                        var l, n = c, p = !0;
                                        p = void 0 === p ? !1 : p;
                                        l = Am(n) ? !1 === n.gdprApplies || "tcunavailable" === n.tcString || void 0 === n.gdprApplies && !p || "string" !== typeof n.tcString || !n.tcString.length ? !0 : xm(n, "1", 0) : !1;
                                        g["1"] = l
                                    } else
                                        g[h] = xm(c, h, Bm[h]);
                            d = g
                        }
                        d && (a.tcString = c.tcString || "tcempty",
                        a.Fe = d,
                        Im(a))
                    }
                })
            } catch (c) {
                Hm(a),
                Im(a)
            }
        }
    };
    function Hm(a) {
        a.type = "e";
        a.tcString = "tcunavailable"
    }
    function Gm() {
        var a = {}
          , b = (a.ad_storage = "denied",
        a.wait_for_update = Cm,
        a);
        pl(b)
    }
    function Em(a) {
        return "function" === typeof z.__tcfapi || "function" === typeof a.m.__tcfapi || null != ym(a) ? !0 : !1
    }
    var Fm = function() {
        return !0 !== z.gtag_enable_tcf_support
    };
    function Im(a) {
        var b = {}
          , c = (b.ad_storage = a.Fe["1"] ? "granted" : "denied",
        b);
        ql(c, {
            eventId: 0
        }, {
            gdprApplies: a ? a.gdprApplies : void 0,
            tcString: Km()
        })
    }
    var Km = function() {
        var a = Dm();
        return a.active ? a.tcString || "" : ""
    }
      , Lm = function() {
        var a = Dm();
        return a.active && void 0 !== a.gdprApplies ? a.gdprApplies ? "1" : "0" : ""
    }
      , Mm = function(a) {
        if (!Bm.hasOwnProperty(String(a)))
            return !0;
        var b = Dm();
        return b.active && b.Fe ? !!b.Fe[String(a)] : !0
    };
    var Nm = function(a) {
        var b = String(a[le.Ua] || "").replace(/_/g, "");
        0 === b.indexOf("cvt") && (b = "cvt");
        return b
    }
      , Om = 0 <= z.location.search.indexOf("?gtm_latency=") || 0 <= z.location.search.indexOf("&gtm_latency=");
    var Pm = ["L", "S", "Y"], Qm = ["S", "E"], Rm = {
        sampleRate: "0.005000",
        Ai: "",
        zi: Number("5"),
        yi: Number("")
    }, Sm;
    if (!(Sm = Om)) {
        var Tm = Math.random()
          , Um = Rm.sampleRate;
        Sm = Tm < Um
    }
    var Vm = Sm
      , Wm = "https://www.googletagmanager.com/a?id=" + L.C + "&cv=1"
      , Xm = {
        label: L.C + " Container",
        children: [{
            label: "Initialization",
            children: []
        }]
    };
    function Ym() {
        return [Wm, "&v=3&t=t", "&pid=" + La(), "&rv=" + Hh.Bf].join("")
    }
    var Zm = Ym();
    function $m() {
        Zm = Ym()
    }
    var an = {}
      , bn = ""
      , cn = ""
      , dn = ""
      , en = ""
      , fn = []
      , gn = ""
      , hn = {}
      , jn = !1
      , kn = {}
      , ln = {}
      , mn = {}
      , nn = ""
      , on = void 0
      , pn = {}
      , qn = {}
      , rn = void 0
      , sn = 5;
    0 < Rm.zi && (sn = Rm.zi);
    var tn = function(a, b) {
        for (var c = 0, d = [], e = 0; e < a; ++e)
            d.push(0);
        return {
            qk: function() {
                return c < a ? !1 : Ua() - d[c % a] < b
            },
            Ok: function() {
                var f = c++ % a;
                d[f] = Ua()
            }
        }
    }(sn, 1E3)
      , un = 1E3
      , vn = "";
    function wn(a) {
        var b = on;
        if (void 0 === b)
            return "";
        var c = yb("GTM"), d = yb("TAGGING"), e = yb("HEALTH"), f = Zm, g = an[b] ? "" : "&es=1", h = pn[b], l = xn(b), n = yn(), p = bn, q = cn, r = nn, t = zn(a), u = dn, v = en, w;
        return [f, g, h, l, c ? "&u=" + c : "", d ? "&ut=" + d : "", e ? "&h=" + e : "", n, p, q, r, t, u, v, w, gn ? "&dl=" + encodeURIComponent(gn) : "", 0 < fn.length ? "&tdp=" + fn.join(".") : "", Hh.Xc ? "&x=" + Hh.Xc : "", "&z=0"].join("")
    }
    function Bn() {
        rn && (z.clearTimeout(rn),
        rn = void 0);
        if (void 0 !== on && (!an[on] || bn || cn))
            if (qn[on] || tn.qk() || 0 >= un--)
                R(1),
                qn[on] = !0;
            else {
                tn.Ok();
                var a = wn(!0);
                pc(a);
                if (en || gn && 0 < fn.length) {
                    var b = a.replace("/a?", "/td?");
                    pc(b)
                }
                an[on] = !0;
                gn = en = dn = nn = cn = bn = "";
                fn = []
            }
    }
    function Cn() {
        rn || (rn = z.setTimeout(Bn, 500))
    }
    function Dn(a) {
        return a.match(/^(gtm|gtag)\./) ? encodeURIComponent(a) : "*"
    }
    function En() {
        2022 <= wn().length && Bn()
    }
    function yn() {
        return "&tc=" + Le.filter(function(a) {
            return a
        }).length
    }
    var Gn = function(a, b) {
        if (Vm && !qn[a] && on !== a) {
            Bn();
            on = a;
            dn = bn = "";
            pn[a] = "&e=" + Dn(b) + "&eid=" + a;
            Cn();
        }
    }
      , Hn = function(a, b, c, d) {
        if (Vm && b) {
            var e = Nm(b)
              , f = c + e;
            if (!qn[a]) {
                a !== on && (Bn(),
                on = a);
                bn = bn ? bn + "." + f : "&tr=" + f;
                var g = b["function"];
                if (!g)
                    throw Error("Error: No function name given for function call.");
                var h = (Ne[g] ? "1" : "2") + e;
                dn = dn ? dn + "." + h : "&ti=" + h;
                Cn();
                En()
            }
        }
    }
      , In = function(a, b, c) {
        if (Vm && a && a[le.zb]) {
            var d = b + "." + a[le.zb];
            mn[d] = c;
            "html" == Nm(a) && vn == d && (bn += ":" + Math.floor(c))
        }
    };
    function zn(a) {}
    function xn(a) {}
    var Pn = function(a, b, c) {
        if (Vm && void 0 !== a && !qn[a]) {
            a !== on && (Bn(),
            on = a);
            var d = c + b;
            cn = cn ? cn + "." + d : "&epr=" + d;
            Cn();
            En()
        }
    }
      , Qn = function(a, b, c) {}
      , An = void 0;
    var Rn = function(a) {
        for (var b = [], c = 0, d = 0; d < a.length; d++) {
            var e = a.charCodeAt(d);
            128 > e ? b[c++] = e : (2048 > e ? b[c++] = e >> 6 | 192 : (55296 == (e & 64512) && d + 1 < a.length && 56320 == (a.charCodeAt(d + 1) & 64512) ? (e = 65536 + ((e & 1023) << 10) + (a.charCodeAt(++d) & 1023),
            b[c++] = e >> 18 | 240,
            b[c++] = e >> 12 & 63 | 128) : b[c++] = e >> 12 | 224,
            b[c++] = e >> 6 & 63 | 128),
            b[c++] = e & 63 | 128)
        }
        return b
    };
    Ub();
    cm() || Rb("iPod");
    Rb("iPad");
    !Rb("Android") || Vb() || Ub() || Tb() || Rb("Silk");
    Vb();
    !Rb("Safari") || Vb() || (Sb() ? 0 : Rb("Coast")) || Tb() || (Sb() ? 0 : Rb("Edge")) || (Sb() ? Qb("Microsoft Edge") : Rb("Edg/")) || (Sb() ? Qb("Opera") : Rb("OPR")) || Ub() || Rb("Silk") || Rb("Android") || dm();
    var Sn = {}
      , Tn = null
      , Un = function(a) {
        for (var b = [], c = 0, d = 0; d < a.length; d++) {
            var e = a.charCodeAt(d);
            255 < e && (b[c++] = e & 255,
            e >>= 8);
            b[c++] = e
        }
        var f = 4;
        void 0 === f && (f = 0);
        if (!Tn) {
            Tn = {};
            for (var g = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""), h = ["+/=", "+/", "-_=", "-_.", "-_"], l = 0; 5 > l; l++) {
                var n = g.concat(h[l].split(""));
                Sn[l] = n;
                for (var p = 0; p < n.length; p++) {
                    var q = n[p];
                    void 0 === Tn[q] && (Tn[q] = p)
                }
            }
        }
        for (var r = Sn[f], t = Array(Math.floor(b.length / 3)), u = r[64] || "", v = 0, w = 0; v < b.length - 2; v += 3) {
            var x = b[v]
              , y = b[v + 1]
              , A = b[v + 2]
              , B = r[x >> 2]
              , C = r[(x & 3) << 4 | y >> 4]
              , D = r[(y & 15) << 2 | A >> 6]
              , I = r[A & 63];
            t[w++] = "" + B + C + D + I
        }
        var G = 0
          , O = u;
        switch (b.length - v) {
        case 2:
            G = b[v + 1],
            O = r[(G & 15) << 2] || u;
        case 1:
            var Q = b[v];
            t[w] = "" + r[Q >> 2] + r[(Q & 3) << 4 | G >> 4] + O + u
        }
        return t.join("")
    };
    var Vn = "platform platformVersion architecture model uaFullVersion bitness fullVersionList wow64".split(" ");
    function Wn(a) {
        var b;
        return null != (b = a.google_tag_data) ? b : a.google_tag_data = {}
    }
    function Xn() {
        var a = z.google_tag_data, b;
        if (null != a && a.uach) {
            var c = a.uach
              , d = Object.assign({}, c);
            c.fullVersionList && (d.fullVersionList = c.fullVersionList.slice(0));
            b = d
        } else
            b = null;
        return b
    }
    function Yn() {
        var a, b;
        return null != (b = null == (a = z.google_tag_data) ? void 0 : a.uach_promise) ? b : null
    }
    function Zn(a) {
        var b, c;
        return "function" === typeof (null == (b = a.navigator) ? void 0 : null == (c = b.userAgentData) ? void 0 : c.getHighEntropyValues)
    }
    function $n() {
        var a = z;
        if (!Zn(a))
            return null;
        var b = Wn(a);
        if (b.uach_promise)
            return b.uach_promise;
        var c = a.navigator.userAgentData.getHighEntropyValues(Vn).then(function(d) {
            null != b.uach || (b.uach = d);
            return d
        });
        return b.uach_promise = c
    }
    ;var ao, bo = function() {
        if (Zn(z) && (ao = Ua(),
        !Yn())) {
            var a = $n();
            a && (a.then(function() {
                R(95);
            }),
            a.catch(function() {
                R(96)
            }))
        }
    }, eo = function(a) {
        var b = co.pl
          , c = function(g, h) {
            try {
                a(g, h)
            } catch (l) {}
        }
          , d = Xn();
        if (d)
            c(d);
        else {
            var e = Yn();
            if (e) {
                b = Math.min(Math.max(isFinite(b) ? b : 0, 0), 1E3);
                var f = z.setTimeout(function() {
                    c.nd || (c.nd = !0,
                    R(106),
                    c(null, Error("Timeout")))
                }, b);
                e.then(function(g) {
                    c.nd || (c.nd = !0,
                    R(104),
                    z.clearTimeout(f),
                    c(g))
                }).catch(function(g) {
                    c.nd || (c.nd = !0,
                    R(105),
                    z.clearTimeout(f),
                    c(null, g))
                })
            } else
                c(null)
        }
    }, fo = function(a, b) {
        a && (b.m[T.g.kf] = a.architecture,
        b.m[T.g.lf] = a.bitness,
        a.fullVersionList && (b.m[T.g.nf] = a.fullVersionList.map(function(c) {
            return encodeURIComponent(c.brand || "") + ";" + encodeURIComponent(c.version || "")
        }).join("|")),
        b.m[T.g.pf] = a.mobile ? "1" : "0",
        b.m[T.g.qf] = a.model,
        b.m[T.g.rf] = a.platform,
        b.m[T.g.sf] = a.platformVersion,
        b.m[T.g.tf] = a.wow64 ? "1" : "0")
    };
    var go = function(a) {
        for (var b = [], c = H.cookie.split(";"), d = new RegExp("^\\s*" + (a || "_gac") + "_(UA-\\d+-\\d+)=\\s*(.+?)\\s*$"), e = 0; e < c.length; e++) {
            var f = c[e].match(d);
            f && b.push({
                sg: f[1],
                value: f[2],
                timestamp: Number(f[2].split(".")[1]) || 0
            })
        }
        b.sort(function(g, h) {
            return h.timestamp - g.timestamp
        });
        return b
    };
    function ho(a, b) {
        var c = go(a)
          , d = {};
        if (!c || !c.length)
            return d;
        for (var e = 0; e < c.length; e++) {
            var f = c[e].value.split(".");
            if (!("1" !== f[0] || b && 3 > f.length || !b && 3 !== f.length) && Number(f[1])) {
                d[c[e].sg] || (d[c[e].sg] = []);
                var g = {
                    version: f[0],
                    timestamp: 1E3 * Number(f[1]),
                    da: f[2]
                };
                b && 3 < f.length && (g.labels = f.slice(3));
                d[c[e].sg].push(g)
            }
        }
        return d
    }
    ;var io = /^\w+$/
      , jo = /^[\w-]+$/
      , ko = {
        aw: "_aw",
        dc: "_dc",
        gf: "_gf",
        ha: "_ha",
        gp: "_gp",
        gb: "_gb"
    }
      , lo = function() {
        if (!xi().h() || !Ni())
            return !0;
        var a = Ji("ad_storage");
        return null == a ? !0 : !!a
    }
      , mo = function(a, b) {
        Mi("ad_storage") ? lo() ? a() : Si(a, "ad_storage") : b ? wb("TAGGING", 3) : Ri(function() {
            mo(a, !0)
        }, ["ad_storage"])
    }
      , oo = function(a) {
        return no(a).map(function(b) {
            return b.da
        })
    }
      , no = function(a) {
        var b = [];
        if (!gj(z) || !H.cookie)
            return b;
        var c = jj(a, H.cookie, void 0, "ad_storage");
        if (!c || 0 == c.length)
            return b;
        for (var d = {}, e = 0; e < c.length; d = {
            Bd: d.Bd
        },
        e++) {
            var f = po(c[e]);
            if (null != f) {
                var g = f
                  , h = g.version;
                d.Bd = g.da;
                var l = g.timestamp
                  , n = g.labels
                  , p = Ka(b, function(q) {
                    return function(r) {
                        return r.da === q.Bd
                    }
                }(d));
                p ? (p.timestamp = Math.max(p.timestamp, l),
                p.labels = qo(p.labels, n || [])) : b.push({
                    version: h,
                    da: d.Bd,
                    timestamp: l,
                    labels: n
                })
            }
        }
        b.sort(function(q, r) {
            return r.timestamp - q.timestamp
        });
        return ro(b)
    };
    function qo(a, b) {
        for (var c = {}, d = [], e = 0; e < a.length; e++)
            c[a[e]] = !0,
            d.push(a[e]);
        for (var f = 0; f < b.length; f++)
            c[b[f]] || d.push(b[f]);
        return d
    }
    function so(a) {
        return a && "string" == typeof a && a.match(io) ? a : "_gcl"
    }
    var uo = function() {
        var a = $i(z.location.href)
          , b = Yi(a, "query", !1, void 0, "gclid")
          , c = Yi(a, "query", !1, void 0, "gclsrc")
          , d = Yi(a, "query", !1, void 0, "wbraid")
          , e = Yi(a, "query", !1, void 0, "dclid");
        if (!b || !c || !d) {
            var f = a.hash.replace("#", "");
            b = b || Vi(f, "gclid", !1);
            c = c || Vi(f, "gclsrc", !1);
            d = d || Vi(f, "wbraid", !1)
        }
        return to(b, c, e, d)
    }
      , to = function(a, b, c, d) {
        var e = {}
          , f = function(g, h) {
            e[h] || (e[h] = []);
            e[h].push(g)
        };
        e.gclid = a;
        e.gclsrc = b;
        e.dclid = c;
        void 0 !== d && jo.test(d) && (e.gbraid = d,
        f(d, "gb"));
        if (void 0 !== a && a.match(jo))
            switch (b) {
            case void 0:
                f(a, "aw");
                break;
            case "aw.ds":
                f(a, "aw");
                f(a, "dc");
                break;
            case "ds":
                f(a, "dc");
                break;
            case "3p.ds":
                f(a, "dc");
                break;
            case "gf":
                f(a, "gf");
                break;
            case "ha":
                f(a, "ha")
            }
        c && f(c, "dc");
        return e
    }
      , wo = function(a) {
        var b = uo();
        mo(function() {
            vo(b, !1, a)
        })
    };
    function vo(a, b, c, d, e) {
        function f(w, x) {
            var y = xo(w, g);
            y && (sj(y, x, h),
            l = !0)
        }
        c = c || {};
        e = e || [];
        var g = so(c.prefix);
        d = d || Ua();
        var h = Bj(c, d, !0);
        h.nb = "ad_storage";
        var l = !1
          , n = Math.round(d / 1E3)
          , p = function(w) {
            var x = ["GCL", n, w];
            0 < e.length && x.push(e.join("."));
            return x.join(".")
        };
        a.aw && f("aw", p(a.aw[0]));
        a.dc && f("dc", p(a.dc[0]));
        a.gf && f("gf", p(a.gf[0]));
        a.ha && f("ha", p(a.ha[0]));
        a.gp && f("gp", p(a.gp[0]));
        if (!l && a.gb) {
            var q = a.gb[0]
              , r = xo("gb", g)
              , t = !1;
            if (!b)
                for (var u = no(r), v = 0; v < u.length; v++)
                    u[v].da === q && u[v].labels && 0 < u[v].labels.length && (t = !0);
            t || f("gb", p(q))
        }
    }
    var zo = function(a, b) {
        var c = Uj(!0);
        mo(function() {
            for (var d = so(b.prefix), e = 0; e < a.length; ++e) {
                var f = a[e];
                if (void 0 !== ko[f]) {
                    var g = xo(f, d)
                      , h = c[g];
                    if (h) {
                        var l = Math.min(yo(h), Ua()), n;
                        b: {
                            var p = l;
                            if (gj(z))
                                for (var q = jj(g, H.cookie, void 0, "ad_storage"), r = 0; r < q.length; ++r)
                                    if (yo(q[r]) > p) {
                                        n = !0;
                                        break b
                                    }
                            n = !1
                        }
                        if (!n) {
                            var t = Bj(b, l, !0);
                            t.nb = "ad_storage";
                            sj(g, h, t)
                        }
                    }
                }
            }
            vo(to(c.gclid, c.gclsrc), !1, b)
        })
    }
      , xo = function(a, b) {
        var c = ko[a];
        if (void 0 !== c)
            return b + c
    }
      , yo = function(a) {
        return 0 !== Ao(a.split(".")).length ? 1E3 * (Number(a.split(".")[1]) || 0) : 0
    };
    function po(a) {
        var b = Ao(a.split("."));
        return 0 === b.length ? null : {
            version: b[0],
            da: b[2],
            timestamp: 1E3 * (Number(b[1]) || 0),
            labels: b.slice(3)
        }
    }
    function Ao(a) {
        return 3 > a.length || "GCL" !== a[0] && "1" !== a[0] || !/^\d+$/.test(a[1]) || !jo.test(a[2]) ? [] : a
    }
    var Bo = function(a, b, c, d, e) {
        if (Ia(b) && gj(z)) {
            var f = so(e)
              , g = function() {
                for (var h = {}, l = 0; l < a.length; ++l) {
                    var n = xo(a[l], f);
                    if (n) {
                        var p = jj(n, H.cookie, void 0, "ad_storage");
                        p.length && (h[n] = p.sort()[p.length - 1])
                    }
                }
                return h
            };
            mo(function() {
                ak(g, b, c, d)
            })
        }
    }
      , ro = function(a) {
        return a.filter(function(b) {
            return jo.test(b.da)
        })
    }
      , Co = function(a, b) {
        if (gj(z)) {
            for (var c = so(b.prefix), d = {}, e = 0; e < a.length; e++)
                ko[a[e]] && (d[a[e]] = ko[a[e]]);
            mo(function() {
                m(d, function(f, g) {
                    var h = jj(c + g, H.cookie, void 0, "ad_storage");
                    h.sort(function(t, u) {
                        return yo(u) - yo(t)
                    });
                    if (h.length) {
                        var l = h[0], n = yo(l), p = 0 !== Ao(l.split(".")).length ? l.split(".").slice(3) : [], q = {}, r;
                        r = 0 !== Ao(l.split(".")).length ? l.split(".")[2] : void 0;
                        q[f] = [r];
                        vo(q, !0, b, n, p)
                    }
                })
            })
        }
    };
    function Do(a, b) {
        for (var c = 0; c < b.length; ++c)
            if (a[b[c]])
                return !0;
        return !1
    }
    var Eo = function(a) {
        function b(e, f, g) {
            g && (e[f] = g)
        }
        if (Ni()) {
            var c = uo();
            if (Do(c, a)) {
                var d = {};
                b(d, "gclid", c.gclid);
                b(d, "dclid", c.dclid);
                b(d, "gclsrc", c.gclsrc);
                b(d, "wbraid", c.gbraid);
                bk(function() {
                    return d
                }, 3);
                bk(function() {
                    var e = {};
                    return e._up = "1",
                    e
                }, 1)
            }
        }
    }
      , Fo = function(a, b, c, d) {
        var e = [];
        c = c || {};
        if (!lo())
            return e;
        var f = no(a);
        if (!f.length)
            return e;
        for (var g = 0; g < f.length; g++)
            -1 === (f[g].labels || []).indexOf(b) ? e.push(0) : e.push(1);
        if (d)
            return e;
        if (1 !== e[0]) {
            var h = f[0]
              , l = f[0].timestamp
              , n = [h.version, Math.round(l / 1E3), h.da].concat(h.labels || [], [b]).join(".")
              , p = Bj(c, l, !0);
            p.nb = "ad_storage";
            sj(a, n, p)
        }
        return e
    };
    function Go(a, b) {
        var c = so(b)
          , d = xo(a, c);
        if (!d)
            return 0;
        for (var e = no(d), f = 0, g = 0; g < e.length; g++)
            f = Math.max(f, e[g].timestamp);
        return f
    }
    function Ho(a) {
        var b = 0, c;
        for (c in a)
            for (var d = a[c], e = 0; e < d.length; e++)
                b = Math.max(b, Number(d[e].timestamp));
        return b
    }
    var Io = function(a) {
        var b = Math.max(Go("aw", a), Ho(lo() ? ho() : {}));
        return Math.max(Go("gb", a), Ho(lo() ? ho("_gac_gb", !0) : {})) > b
    };
    var No = /[A-Z]+/
      , Oo = /\s/
      , Po = function(a) {
        if (k(a)) {
            a = Sa(a);
            var b = a.indexOf("-");
            if (!(0 > b)) {
                var c = a.substring(0, b);
                if (No.test(c)) {
                    for (var d = a.substring(b + 1).split("/"), e = 0; e < d.length; e++)
                        if (!d[e] || Oo.test(d[e]) && ("AW" !== c || 1 !== e))
                            return;
                    return {
                        id: a,
                        prefix: c,
                        V: c + "-" + d[0],
                        N: d
                    }
                }
            }
        }
    }
      , Ro = function(a) {
        for (var b = {}, c = 0; c < a.length; ++c) {
            var d = Po(a[c]);
            d && (b[d.id] = d)
        }
        Qo(b);
        var e = [];
        m(b, function(f, g) {
            e.push(g)
        });
        return e
    };
    function Qo(a) {
        var b = [], c;
        for (c in a)
            if (a.hasOwnProperty(c)) {
                var d = a[c];
                "AW" === d.prefix && d.N[1] && b.push(d.V)
            }
        for (var e = 0; e < b.length; ++e)
            delete a[b[e]]
    }
    ;var So = function(a, b, c, d) {
        var e = nc(), f;
        if (1 === e)
            a: {
                var g = ci;
                g = g.toLowerCase();
                for (var h = "https://" + g, l = "http://" + g, n = 1, p = H.getElementsByTagName("script"), q = 0; q < p.length && 100 > q; q++) {
                    var r = p[q].src;
                    if (r) {
                        r = r.toLowerCase();
                        if (0 === r.indexOf(l)) {
                            f = 3;
                            break a
                        }
                        1 === n && 0 === r.indexOf(h) && (n = 2)
                    }
                }
                f = n
            }
        else
            f = e;
        return (2 === f || d || "http:" != z.location.protocol ? a : b) + c
    };
    var dp = function(a, b, c) {
        this.target = a;
        this.eventName = b;
        this.h = c;
        this.m = {};
        this.metadata = K(c.eventMetadata || {});
        this.J = !1
    };
    dp.prototype.copyToHitData = function(a, b) {
        var c = V(this.h, a);
        void 0 !== c ? this.m[a] = c : void 0 !== b && (this.m[a] = b)
    }
    ;
    var ep = function(a, b, c) {
        var d = Dk(a.target.V);
        return d && d.hasOwnProperty(b) ? d[b] : c
    };
    function fp(a) {
        return {
            getDestinationId: function() {
                return a.target.V
            },
            getEventName: function() {
                return a.eventName
            },
            setEventName: function(b) {
                a.eventName = b
            },
            getHitData: function(b) {
                return a.m[b]
            },
            setHitData: function(b, c) {
                a.m[b] = c
            },
            setHitDataIfNotDefined: function(b, c) {
                void 0 === a.m[b] && (a.m[b] = c)
            },
            copyToHitData: function(b, c) {
                a.copyToHitData(b, c)
            },
            getMetadata: function(b) {
                return a.metadata[b]
            },
            setMetadata: function(b, c) {
                a.metadata[b] = c
            },
            abort: function() {
                a.J = !0
            },
            getFromEventContext: function(b) {
                return V(a.h, b)
            },
            Be: function() {
                return a
            },
            getHitKeys: function() {
                return Object.keys(a.m)
            }
        }
    }
    ;var hp = function(a) {
        var b = gp[a.target.V];
        if (!a.J && b)
            for (var c = fp(a), d = 0; d < b.length; ++d) {
                try {
                    b[d](c)
                } catch (e) {
                    a.J = !0
                }
                if (a.J)
                    break
            }
    }
      , ip = function(a, b) {
        var c = gp[a];
        c || (c = gp[a] = []);
        c.push(b)
    }
      , gp = {};
    var Ap = function(a, b, c, d, e, f, g, h, l, n, p, q) {
        this.eventId = a;
        this.priorityId = b;
        this.h = c;
        this.K = d;
        this.m = e;
        this.D = f;
        this.R = g;
        this.B = h;
        this.eventMetadata = l;
        this.X = n;
        this.W = p;
        this.H = q
    }
      , V = function(a, b, c) {
        if (void 0 !== a.h[b])
            return a.h[b];
        if (void 0 !== a.K[b])
            return a.K[b];
        if (void 0 !== a.m[b])
            return a.m[b];
        Vm && Bp(a, a.D[b], a.R[b]) && (R(71),
        R(79));
        return void 0 !== a.D[b] ? a.D[b] : void 0 !== a.B[b] ? a.B[b] : c
    }
      , Cp = function(a) {
        function b(g) {
            for (var h = Object.keys(g), l = 0; l < h.length; ++l)
                c[h[l]] = 1
        }
        var c = {};
        b(a.h);
        b(a.K);
        b(a.m);
        b(a.D);
        if (Vm)
            for (var d = Object.keys(a.R), e = 0; e < d.length; e++) {
                var f = d[e];
                if ("event" !== f && "gtm" !== f && "tagTypeBlacklist" !== f && !c.hasOwnProperty(f)) {
                    R(71);
                    R(80);
                    break
                }
            }
        return Object.keys(c)
    }
      , Dp = function(a, b, c) {
        function d(l) {
            Qc(l) && m(l, function(n, p) {
                f = !0;
                e[n] = p
            })
        }
        var e = {}
          , f = !1;
        c && 1 !== c || (d(a.B[b]),
        d(a.D[b]),
        d(a.m[b]),
        d(a.K[b]));
        c && 2 !== c || d(a.h[b]);
        if (Vm) {
            var g = f
              , h = e;
            e = {};
            f = !1;
            c && 1 !== c || (d(a.B[b]),
            d(a.R[b]),
            d(a.m[b]),
            d(a.K[b]));
            c && 2 !== c || d(a.h[b]);
            if (f !== g || Bp(a, e, h))
                R(71),
                R(81);
            f = g;
            e = h
        }
        return f ? e : void 0
    }
      , Ep = function(a) {
        var b = [T.g.Hc, T.g.Nd, T.g.Od, T.g.Pd, T.g.Qd, T.g.Rd, T.g.Sd]
          , c = {}
          , d = !1
          , e = function(h) {
            for (var l = 0; l < b.length; l++)
                void 0 !== h[b[l]] && (c[b[l]] = h[b[l]],
                d = !0);
            return d
        };
        if (e(a.h) || e(a.K) || e(a.m))
            return c;
        e(a.D);
        if (Vm) {
            var f = c
              , g = d;
            c = {};
            d = !1;
            e(a.R);
            Bp(a, c, f) && (R(71),
            R(82));
            c = f;
            d = g
        }
        if (d)
            return c;
        e(a.B);
        return c
    }
      , Bp = function(a, b, c) {
        if (!Vm)
            return !1;
        try {
            if (b === c)
                return !1;
            var d = Oc(b);
            if (d !== Oc(c) || !(Qc(b) && Qc(c) || "array" === d))
                return !0;
            if ("array" === d) {
                if (b.length !== c.length)
                    return !0;
                for (var e = 0; e < b.length; e++)
                    if (Bp(a, b[e], c[e]))
                        return !0
            } else {
                for (var f in c)
                    if (!b.hasOwnProperty(f))
                        return !0;
                for (var g in b)
                    if (!c.hasOwnProperty(g) || Bp(a, b[g], c[g]))
                        return !0
            }
        } catch (h) {
            R(72)
        }
        return !1
    }
      , Fp = function(a, b) {
        this.nj = a;
        this.oj = b;
        this.D = {};
        this.xh = {};
        this.h = {};
        this.K = {};
        this.m = {};
        this.Uc = {};
        this.B = {};
        this.Bc = function() {}
        ;
        this.ab = function() {}
        ;
        this.R = !1
    }
      , Gp = function(a, b) {
        a.D = b;
        return a
    }
      , Hp = function(a, b) {
        a.xh = b;
        return a
    }
      , Ip = function(a, b) {
        a.h = b;
        return a
    }
      , Jp = function(a, b) {
        a.K = b;
        return a
    }
      , Kp = function(a, b) {
        a.m = b;
        return a
    }
      , Lp = function(a, b) {
        a.Uc = b;
        return a
    }
      , Mp = function(a, b) {
        a.B = b || {};
        return a
    }
      , Np = function(a, b) {
        a.Bc = b;
        return a
    }
      , Op = function(a, b) {
        a.ab = b;
        return a
    }
      , Pp = function(a) {
        a.R = !0;
        return a
    }
      , Qp = function(a) {
        return new Ap(a.nj,a.oj,a.D,a.xh,a.h,a.K,a.m,a.Uc,a.B,a.Bc,a.ab,a.R)
    };
    function Vp() {
        return "attribution-reporting"
    }
    function Wp(a) {
        var b;
        b = void 0 === b ? document : b;
        var c;
        return !(null == (c = b.featurePolicy) || !c.allowedFeatures().includes(a))
    }
    ;var Xp = !1;
    function Yp() {
        if (Wp("join-ad-interest-group") && Ea(fc.joinAdInterestGroup))
            return !0;
        Xp || (mm(),
        Xp = !0);
        return Wp("join-ad-interest-group") && Ea(fc.joinAdInterestGroup)
    }
    function Zp(a, b) {
        var c = void 0;
        try {
            c = H.querySelector('iframe[data-tagging-id="' + b + '"]')
        } catch (e) {}
        if (c) {
            var d = Number(c.dataset.loadTime);
            if (d && 6E4 > Ua() - d) {
                wb("TAGGING", 9);
                return
            }
        } else
            try {
                if (50 <= H.querySelectorAll('iframe[allow="join-ad-interest-group"][data-tagging-id*="-"]').length) {
                    wb("TAGGING", 10);
                    return
                }
            } catch (e) {}
        oc(a, void 0, {
            allow: "join-ad-interest-group"
        }, {
            taggingId: b,
            loadTime: Ua()
        }, c)
    }
    function $p() {
        return U(60) ? "https://td.doubleclick.net" : "https://googleads.g.doubleclick.net"
    }
    ;var aq = RegExp("^UA-\\d+-\\d+%3A[\\w-]+(?:%2C[\\w-]+)*(?:%3BUA-\\d+-\\d+%3A[\\w-]+(?:%2C[\\w-]+)*)*$")
      , bq = /^~?[\w-]+(?:\.~?[\w-]+)*$/
      , cq = /^\d+\.fls\.doubleclick\.net$/
      , dq = /;gac=([^;?]+)/
      , eq = /;gacgb=([^;?]+)/
      , fq = /;gclaw=([^;?]+)/
      , gq = /;gclgb=([^;?]+)/;
    function hq(a, b) {
        if (cq.test(H.location.host)) {
            var c = H.location.href.match(b);
            return c && 2 == c.length && c[1].match(aq) ? decodeURIComponent(c[1]) : ""
        }
        var d = [], e;
        for (e in a) {
            for (var f = [], g = a[e], h = 0; h < g.length; h++)
                f.push(g[h].da);
            d.push(e + ":" + f.join(","))
        }
        return 0 < d.length ? d.join(";") : ""
    }
    var iq = function(a, b, c) {
        var d = lo() ? ho("_gac_gb", !0) : {}, e = [], f = !1, g;
        for (g in d) {
            var h = Fo("_gac_gb_" + g, a, b, c);
            f = f || 0 !== h.length && h.some(function(l) {
                return 1 === l
            });
            e.push(g + ":" + h.join(","))
        }
        return {
            Zj: f ? e.join(";") : "",
            Yj: hq(d, eq)
        }
    };
    function jq(a, b, c) {
        if (cq.test(H.location.host)) {
            var d = H.location.href.match(c);
            if (d && 2 == d.length && d[1].match(bq))
                return [{
                    da: d[1]
                }]
        } else
            return no((a || "_gcl") + b);
        return []
    }
    var kq = function(a) {
        return jq(a, "_aw", fq).map(function(b) {
            return b.da
        }).join(".")
    }
      , lq = function(a) {
        return jq(a, "_gb", gq).map(function(b) {
            return b.da
        }).join(".")
    }
      , mq = function(a, b) {
        var c = Fo((b && b.prefix || "_gcl") + "_gb", a, b);
        return 0 === c.length || c.every(function(d) {
            return 0 === d
        }) ? "" : c.join(".")
    };
    var nq = function() {
        if (Ea(z.__uspapi)) {
            var a = "";
            try {
                z.__uspapi("getUSPData", 1, function(b, c) {
                    if (c && b) {
                        var d = b.uspString;
                        d && RegExp("^[\\da-zA-Z-]{1,20}$").test(d) && (a = d)
                    }
                })
            } catch (b) {}
            return a
        }
    };
    var Yq = {
        F: {
            vg: "ads_conversion_hit",
            Oe: "container_execute_start",
            yg: "container_setup_end",
            Pe: "container_setup_start",
            xg: "container_execute_end",
            zg: "container_yield_end",
            Qe: "container_yield_start",
            uh: "event_execute_end",
            vh: "event_setup_end",
            Tc: "event_setup_start",
            wh: "ga4_conversion_hit",
            Vc: "page_load",
            Dl: "pageview",
            yb: "snippet_load",
            Ih: "tag_callback_error",
            Jh: "tag_callback_failure",
            Kh: "tag_callback_success",
            Lh: "tag_execute_end",
            kc: "tag_execute_start"
        }
    };
    var Zq = !1
      , $q = "L S Y E TC HTC".split(" ")
      , ar = ["S", "E"]
      , br = ["TS", "TE"];
    var Cr = function(a) {}
      , Dr = function(a) {}
      , cr = function(a, b, c, d, e, f) {
        var g;
        g = void 0 === g ? !1 : g;
        var h = {};
        return h
    }
      , dr = function(a) {
        var b = !1;
        return b
    }
      , er = function(a, b) {}
      , Er = function() {
        var a = {};
        return a
    }
      , vr = function(a) {
        a = void 0 === a ? !0 : a;
        var b = {};
        return b
    }
      , Fr = function() {}
      , Gr = function(a, b, c) {}
      , Hr = function(a) {
        zc() && zc().mark(L.C + "_" + a + "_start")
    }
      , Ir = function(a) {
        if (zc()) {
            var b = zc()
              , c = L.C + "_" + a + "_start"
              , d = L.C + "_" + a + "_duration";
            b.measure(d, c);
            var e = zc().getEntriesByName(d)[0];
            b.clearMarks(c);
            b.clearMeasures(d);
            var f = Ih._p || {};
            void 0 === f[a] && (f[a] = e.duration,
            Ih._p = f);
            return e.duration
        }
    }
      , Jr = function() {
        var a = cr("PAGEVIEW", L.C);
        if (nr(a.entryName, "mark")[0]) {
            var b = zc();
            b.clearMarks(a.entryName);
            b.clearMeasures("GTM-" + L.C + ":" + Yq.F.Vc + ":to:PAGEVIEW")
        }
        var c = cr(Yq.F.Vc, L.C);
        dr(a) && er(a, c)
    };
    var Kr = function(a, b) {
        var c = z, d, e = c.GooglebQhCsO;
        e || (e = {},
        c.GooglebQhCsO = e);
        d = e;
        if (d[a])
            return !1;
        d[a] = [];
        d[a][0] = b;
        return !0
    };
    var Lr = function(a, b, c) {
        var d = hm(a, "fmt");
        if (b) {
            var e = hm(a, "random")
              , f = hm(a, "label") || "";
            if (!e)
                return !1;
            var g = Un(decodeURIComponent(f.replace(/\+/g, " ")) + ":" + decodeURIComponent(e.replace(/\+/g, " ")));
            if (!Kr(g, b))
                return !1
        }
        d && 4 != d && (a = jm(a, "rfmt", d));
        var h = jm(a, "fmt", 4);
        mc(h, function() {
            z.google_noFurtherRedirects && b && b.call && (z.google_noFurtherRedirects = null,
            b())
        }, void 0, c, H.getElementsByTagName("script")[0].parentElement || void 0);
        return !0
    };
    var as = function() {
        this.h = {}
    }
      , bs = function(a, b, c) {
        null != c && (a.h[b] = c)
    }
      , cs = function(a) {
        return Object.keys(a.h).map(function(b) {
            return encodeURIComponent(b) + "=" + encodeURIComponent(a.h[b])
        }).join("&")
    }
      , es = function(a, b, c, d) {};
    function gs(a, b) {
        if (a) {
            var c = "" + a;
            0 !== c.indexOf("http://") && 0 !== c.indexOf("https://") && (c = "https://" + c);
            "/" === c[c.length - 1] && (c = c.substring(0, c.length - 1));
            return $i("" + c + b).href
        }
    }
    function hs() {
        return !!Hh.se && "SGTM_TOKEN" !== Hh.se.split("@@").join("")
    }
    ;var js = function(a, b, c, d) {
        if (!is() && !Vl(a)) {
            var e = c ? "/gtag/js" : "/gtm.js"
              , f = "?id=" + encodeURIComponent(a) + "&l=" + Hh.ia
              , g = 0 === a.indexOf("GTM-");
            g || (f += "&cx=c");
            var h = hs();
            h && (f += "&sign=" + Hh.se);
            var l = Qh || Zh ? gs(b, e + f) : void 0;
            if (!l) {
                var n = Hh.Gd + e;
                h && gc && g && (n = gc.replace(/^(?:https?:\/\/)?/i, "").split(/[?#]/)[0]);
                l = So("https://", "http://", n + f)
            }
            Cl().container[a] = {
                state: 1,
                context: d
            };
            mc(l)
        }
    }
      , ks = function(a, b, c) {
        var d;
        if (d = !is()) {
            var e = Cl().destination[a];
            d = !(e && e.state)
        }
        if (d)
            if (Wl())
                Cl().destination[a] = {
                    state: 0,
                    transportUrl: b,
                    context: c
                },
                R(91);
            else {
                var f = "/gtag/destination?id=" + encodeURIComponent(a) + "&l=" + Hh.ia + "&cx=c";
                hs() && (f += "&sign=" + Hh.se);
                var g = Qh || Zh ? gs(b, f) : void 0;
                g || (g = So("https://", "http://", Hh.Gd + f));
                Cl().destination[a] = {
                    state: 1,
                    context: c
                };
                mc(g)
            }
    };
    function is() {
        if (xl()) {
            return !0
        }
        return !1
    }
    ;var ls = new RegExp(/^(.*\.)?(google|youtube|blogger|withgoogle)(\.com?)?(\.[a-z]{2})?\.?$/)
      , ms = {
        cl: ["ecl"],
        customPixels: ["nonGooglePixels"],
        ecl: ["cl"],
        ehl: ["hl"],
        hl: ["ehl"],
        html: ["customScripts", "customPixels", "nonGooglePixels", "nonGoogleScripts", "nonGoogleIframes"],
        customScripts: ["html", "customPixels", "nonGooglePixels", "nonGoogleScripts", "nonGoogleIframes"],
        nonGooglePixels: [],
        nonGoogleScripts: ["nonGooglePixels"],
        nonGoogleIframes: ["nonGooglePixels"]
    }
      , ns = {
        cl: ["ecl"],
        customPixels: ["customScripts", "html"],
        ecl: ["cl"],
        ehl: ["hl"],
        hl: ["ehl"],
        html: ["customScripts"],
        customScripts: ["html"],
        nonGooglePixels: ["customPixels", "customScripts", "html", "nonGoogleScripts", "nonGoogleIframes"],
        nonGoogleScripts: ["customScripts", "html"],
        nonGoogleIframes: ["customScripts", "html", "nonGoogleScripts"]
    }
      , os = "google customPixels customScripts html nonGooglePixels nonGoogleScripts nonGoogleIframes".split(" ")
      , rs = function(a) {
        var b = oi("gtm.allowlist") || oi("gtm.whitelist");
        b && R(9);
        Oh && (b = ["google", "gtagfl", "lcl", "zone"]);
        ps() && (Oh ? R(116) : R(117),
        qs && (b = [],
        window.console && window.console.log && window.console.log("GTM blocked. See go/13687728.")));
        var c = b && $a(Ra(b), ms)
          , d = oi("gtm.blocklist") || oi("gtm.blacklist");
        d || (d = oi("tagTypeBlacklist")) && R(3);
        d ? R(8) : d = [];
        ps() && (d = Ra(d),
        d.push("nonGooglePixels", "nonGoogleScripts", "sandboxedScripts"));
        0 <= Ra(d).indexOf("google") && R(2);
        var e = d && $a(Ra(d), ns)
          , f = {};
        return function(g) {
            var h = g && g[le.Ua];
            if (!h || "string" != typeof h)
                return !0;
            h = h.replace(/^_*/, "");
            if (void 0 !== f[h])
                return f[h];
            var l = gi[h] || []
              , n = a(h, l);
            if (b) {
                var p;
                if (p = n)
                    a: {
                        if (0 > c.indexOf(h))
                            if (l && 0 < l.length)
                                for (var q = 0; q < l.length; q++) {
                                    if (0 > c.indexOf(l[q])) {
                                        R(11);
                                        p = !1;
                                        break a
                                    }
                                }
                            else {
                                p = !1;
                                break a
                            }
                        p = !0
                    }
                n = p
            }
            var r = !1;
            if (d) {
                var t = 0 <= e.indexOf(h);
                if (t)
                    r = t;
                else {
                    var u = Na(e, l || []);
                    u && R(10);
                    r = u
                }
            }
            var v = !n || r;
            v || !(0 <= l.indexOf("sandboxedScripts")) || c && -1 !== c.indexOf("sandboxedScripts") || (v = Na(e, os));
            return f[h] = v
        }
    }
      , qs = !1;
    var ps = function() {
        return ls.test(z.location && z.location.hostname)
    };
    var ss = {
        initialized: 11,
        complete: 12,
        interactive: 13
    }
      , ts = {}
      , us = Object.freeze((ts[T.g.La] = !0,
    ts))
      , vs = 0 <= H.location.search.indexOf("?gtm_diagnostics=") || 0 <= H.location.search.indexOf("&gtm_diagnostics=")
      , xs = function(a, b, c) {
        if (Vm && "config" === a && !(1 < Po(b).N.length)) {
            var d, e = hc("google_tag_data", {});
            e.td || (e.td = {});
            d = e.td;
            var f = K(c.D);
            K(c.h, f);
            var g = [], h;
            for (h in d) {
                var l = ws(d[h], f);
                l.length && (vs && console.log(l),
                g.push(h))
            }
            if (g.length) {
                if (g.length) {
                    var n = b + "*" + g.join(".");
                    en = en ? en + "!" + n : "&tdc=" + n
                }
                wb("TAGGING", ss[H.readyState] || 14)
            }
            d[b] = f
        }
    };
    function ys(a, b) {
        var c = {}, d;
        for (d in b)
            b.hasOwnProperty(d) && (c[d] = !0);
        for (var e in a)
            a.hasOwnProperty(e) && (c[e] = !0);
        return c
    }
    function ws(a, b, c, d) {
        c = void 0 === c ? {} : c;
        d = void 0 === d ? "" : d;
        if (a === b)
            return [];
        var e = function(q, r) {
            var t = r[q];
            return void 0 === t ? us[q] : t
        }, f;
        for (f in ys(a, b)) {
            var g = (d ? d + "." : "") + f
              , h = e(f, a)
              , l = e(f, b)
              , n = "object" === Oc(h) || "array" === Oc(h)
              , p = "object" === Oc(l) || "array" === Oc(l);
            if (n && p)
                ws(h, l, c, g);
            else if (n || p || h !== l)
                c[g] = !0
        }
        return Object.keys(c)
    }
    ;var zs = !1
      , As = 0
      , Bs = [];
    function Cs(a) {
        if (!zs) {
            var b = H.createEventObject
              , c = "complete" == H.readyState
              , d = "interactive" == H.readyState;
            if (!a || "readystatechange" != a.type || c || !b && d) {
                zs = !0;
                for (var e = 0; e < Bs.length; e++)
                    J(Bs[e])
            }
            Bs.push = function() {
                for (var f = 0; f < arguments.length; f++)
                    J(arguments[f]);
                return 0
            }
        }
    }
    function Ds() {
        if (!zs && 140 > As) {
            As++;
            try {
                H.documentElement.doScroll("left"),
                Cs()
            } catch (a) {
                z.setTimeout(Ds, 50)
            }
        }
    }
    var Es = function(a) {
        zs ? a() : Bs.push(a)
    };
    var Fs = function() {
        this.D = 0;
        this.h = {}
    };
    Fs.prototype.addListener = function(a, b, c) {
        var d = ++this.D;
        this.h[a] = this.h[a] || {};
        this.h[a][String(d)] = {
            listener: b,
            Xa: c
        };
        return d
    }
    ;
    Fs.prototype.m = function(a, b) {
        var c = this.h[a]
          , d = String(b);
        if (!c || !c[d])
            return !1;
        delete c[d];
        return !0
    }
    ;
    Fs.prototype.B = function(a, b) {
        var c = [];
        m(this.h[a], function(d, e) {
            0 > c.indexOf(e.listener) && (void 0 === e.Xa || 0 <= b.indexOf(e.Xa)) && c.push(e.listener)
        });
        return c
    }
    ;
    var Gs = function(a, b, c) {
        return {
            entityType: a,
            indexInOriginContainer: b,
            nameInOriginContainer: c,
            originContainerId: L.C
        }
    };
    var Is = function(a, b) {
        this.h = !1;
        this.D = [];
        this.K = {
            tags: []
        };
        this.R = !1;
        this.m = this.B = 0;
        Hs(this, a, b)
    }
      , Js = function(a, b, c, d) {
        if (Lh.hasOwnProperty(b) || "__zone" === b)
            return -1;
        var e = {};
        Qc(d) && (e = K(d, e));
        e.id = c;
        e.status = "timeout";
        return a.K.tags.push(e) - 1
    }
      , Ks = function(a, b, c, d) {
        var e = a.K.tags[b];
        e && (e.status = c,
        e.executionTime = d)
    }
      , Ls = function(a) {
        if (!a.h) {
            for (var b = a.D, c = 0; c < b.length; c++)
                b[c]();
            a.h = !0;
            a.D.length = 0
        }
    }
      , Hs = function(a, b, c) {
        void 0 !== b && a.ue(b);
        c && z.setTimeout(function() {
            return Ls(a)
        }, Number(c))
    };
    Is.prototype.ue = function(a) {
        var b = this
          , c = Xa(function() {
            return J(function() {
                a(L.C, b.K)
            })
        });
        this.h ? c() : this.D.push(c)
    }
    ;
    var Ms = function(a) {
        a.B++;
        return Xa(function() {
            a.m++;
            a.R && a.m >= a.B && Ls(a)
        })
    }
      , Ns = function(a) {
        a.R = !0;
        a.m >= a.B && Ls(a)
    };
    var Os = {}
      , Ps = function() {
        return z.GoogleAnalyticsObject && z[z.GoogleAnalyticsObject]
    }
      , Qs = !1;
    function Ts() {
        return z.GoogleAnalyticsObject || "ga"
    }
    var Us = function(a) {}
      , Vs = function(a, b) {
        return function() {
            var c = Ps()
              , d = c && c.getByName && c.getByName(a);
            if (d) {
                var e = d.get("sendHitTask");
                d.set("sendHitTask", function(f) {
                    var g = f.get("hitPayload")
                      , h = f.get("hitCallback")
                      , l = 0 > g.indexOf("&tid=" + b);
                    l && (f.set("hitPayload", g.replace(/&tid=UA-[0-9]+-[0-9]+/, "&tid=" + b), !0),
                    f.set("hitCallback", void 0, !0));
                    e(f);
                    l && (f.set("hitPayload", g, !0),
                    f.set("hitCallback", h, !0),
                    f.set("_x_19", void 0, !0),
                    e(f))
                })
            }
        }
    };
    function $s(a, b, c, d) {
        var e = Le[a]
          , f = at(a, b, c, d);
        if (!f)
            return null;
        var g = Ve(e[le.Hh], c, []);
        if (g && g.length) {
            var h = g[0];
            f = $s(h.index, {
                X: f,
                W: 1 === h.Wh ? b.terminate : f,
                terminate: b.terminate
            }, c, d)
        }
        return f
    }
    function at(a, b, c, d) {
        function e() {
            if (f[le.tj])
                h();
            else {
                var w = We(f, c, [])
                  , x = w[le.Di];
                if (null != x)
                    for (var y = 0; y < x.length; y++)
                        if (!rl(x[y])) {
                            h();
                            return
                        }
                var A = Js(c.Ab, String(f[le.Ua]), Number(f[le.zb]), w[le.uj])
                  , B = !1;
                w.vtp_gtmOnSuccess = function() {
                    if (!B) {
                        B = !0;
                        var G = Ua() - I;
                        Hn(c.id, Le[a], "5", G);
                        Ks(c.Ab, A, "success", G);
                        U(70) && Gr(c, f, Yq.F.Kh);
                        g()
                    }
                }
                ;
                w.vtp_gtmOnFailure = function() {
                    if (!B) {
                        B = !0;
                        var G = Ua() - I;
                        Hn(c.id, Le[a], "6", G);
                        Ks(c.Ab, A, "failure", G);
                        U(70) && Gr(c, f, Yq.F.Jh);
                        h()
                    }
                }
                ;
                w.vtp_gtmTagId = f.tag_id;
                w.vtp_gtmEventId = c.id;
                c.priorityId && (w.vtp_gtmPriorityId = c.priorityId);
                Hn(c.id, f, "1");
                var C = function() {
                    var G = Ua() - I;
                    Hn(c.id, f, "7", G);
                    Ks(c.Ab, A, "exception", G);
                    U(70) && Gr(c, f, Yq.F.Ih);
                    B || (B = !0,
                    h())
                };
                if (U(70)) {
                    var D = cr(Yq.F.kc, L.C, c.id, Number(f[le.zb]), c.name, Nm(f));
                    dr(D)
                }
                var I = Ua();
                try {
                    Ue(w, {
                        event: c,
                        index: a,
                        type: 1
                    })
                } catch (G) {
                    C(G)
                }
                U(70) && Gr(c, f, Yq.F.Lh)
            }
        }
        var f = Le[a]
          , g = b.X
          , h = b.W
          , l = b.terminate;
        if (c.Uf(f))
            return null;
        var n = Ve(f[le.Mh], c, []);
        if (n && n.length) {
            var p = n[0]
              , q = $s(p.index, {
                X: g,
                W: h,
                terminate: l
            }, c, d);
            if (!q)
                return null;
            g = q;
            h = 2 === p.Wh ? l : q
        }
        if (f[le.Dh] || f[le.wj]) {
            var r = f[le.Dh] ? Me : c.fl
              , t = g
              , u = h;
            if (!r[a]) {
                e = Xa(e);
                var v = bt(a, r, e);
                g = v.X;
                h = v.W
            }
            return function() {
                r[a](t, u)
            }
        }
        return e
    }
    function bt(a, b, c) {
        var d = []
          , e = [];
        b[a] = ct(d, e, c);
        return {
            X: function() {
                b[a] = dt;
                for (var f = 0; f < d.length; f++)
                    d[f]()
            },
            W: function() {
                b[a] = et;
                for (var f = 0; f < e.length; f++)
                    e[f]()
            }
        }
    }
    function ct(a, b, c) {
        return function(d, e) {
            a.push(d);
            b.push(e);
            c()
        }
    }
    function dt(a) {
        a()
    }
    function et(a, b) {
        b()
    }
    ;var gt = function(a, b) {
        return 1 === arguments.length ? ft("set", a) : ft("set", a, b)
    }
      , ht = function(a, b) {
        return 1 === arguments.length ? ft("config", a) : ft("config", a, b)
    }
      , At = function(a, b, c) {
        c = c || {};
        c[T.g.Mb] = a;
        return ft("event", b, c)
    };
    function ft(a) {
        return arguments
    }
    var Ot = function() {
        this.h = [];
        this.m = []
    };
    Ot.prototype.enqueue = function(a, b, c) {
        var d = this.h.length + 1;
        a["gtm.uniqueEventId"] = b;
        a["gtm.priorityId"] = d;
        c.eventId = b;
        c.fromContainerExecution = !0;
        c.priorityId = d;
        var e = {
            message: a,
            notBeforeEventId: b,
            priorityId: d,
            messageContext: c
        };
        this.h.push(e);
        for (var f = 0; f < this.m.length; f++)
            try {
                this.m[f](e)
            } catch (g) {}
    }
    ;
    Ot.prototype.listen = function(a) {
        this.m.push(a)
    }
    ;
    Ot.prototype.get = function() {
        for (var a = {}, b = 0; b < this.h.length; b++) {
            var c = this.h[b]
              , d = a[c.notBeforeEventId];
            d || (d = [],
            a[c.notBeforeEventId] = d);
            d.push(c)
        }
        return a
    }
    ;
    Ot.prototype.prune = function(a) {
        for (var b = [], c = [], d = 0; d < this.h.length; d++) {
            var e = this.h[d];
            e.notBeforeEventId === a ? b.push(e) : c.push(e)
        }
        this.h = c;
        return b
    }
    ;
    var Qt = function(a, b, c) {
        Pt().enqueue(a, b, c)
    }
      , St = function() {
        var a = Rt;
        Pt().listen(a)
    };
    function Pt() {
        var a = Ih.mb;
        a || (a = new Ot,
        Ih.mb = a);
        return a
    }
    var $t = function(a) {
        var b = Ih.zones;
        return b ? b.getIsAllowedFn(zl(), a) : function() {
            return !0
        }
    }
      , au = function(a) {
        var b = Ih.zones;
        return b ? b.isActive(zl(), a) : !0
    };
    var du = function(a, b) {
        for (var c = [], d = 0; d < Le.length; d++)
            if (a[d]) {
                var e = Le[d];
                var f = Ms(b.Ab);
                try {
                    var g = $s(d, {
                        X: f,
                        W: f,
                        terminate: f
                    }, b, d);
                    if (g) {
                        var h = c
                          , l = h.push
                          , n = d
                          , p = e["function"];
                        if (!p)
                            throw "Error: No function name given for function call.";
                        var q = Ne[p];
                        l.call(h, {
                            ri: n,
                            hi: q ? q.priorityOverride || 0 : 0,
                            execute: g
                        })
                    } else
                        bu(d, b),
                        f()
                } catch (t) {
                    f()
                }
            }
        c.sort(cu);
        for (var r = 0; r < c.length; r++)
            c[r].execute();
        return 0 < c.length
    };
    var fu = function(a, b) {
        if (!eu)
            return !1;
        var c = a["gtm.triggers"] && String(a["gtm.triggers"])
          , d = eu.B(a.event, c ? String(c).split(",") : []);
        if (!d.length)
            return !1;
        for (var e = 0; e < d.length; ++e) {
            var f = Ms(b);
            try {
                d[e](a, f)
            } catch (g) {
                f()
            }
        }
        return !0
    };
    function cu(a, b) {
        var c, d = b.hi, e = a.hi;
        c = d > e ? 1 : d < e ? -1 : 0;
        var f;
        if (0 !== c)
            f = c;
        else {
            var g = a.ri
              , h = b.ri;
            f = g > h ? 1 : g < h ? -1 : 0
        }
        return f
    }
    function bu(a, b) {
        if (Vm) {
            var c = function(d) {
                var e = b.Uf(Le[d]) ? "3" : "4"
                  , f = Ve(Le[d][le.Hh], b, []);
                f && f.length && c(f[0].index);
                Hn(b.id, Le[d], e);
                var g = Ve(Le[d][le.Mh], b, []);
                g && g.length && c(g[0].index)
            };
            c(a)
        }
    }
    var gu = !1, eu;
    var hu = function() {
        eu || (eu = new Fs);
        return eu
    };
    var mu = function(a) {
        var b = Ua()
          , c = a["gtm.uniqueEventId"]
          , d = a["gtm.priorityId"]
          , e = a.event;
        if (U(70)) {
            var f = cr(Yq.F.Tc, L.C, c, void 0, e);
            dr(f)
        }
        if ("gtm.js" === e) {
            if (gu)
                return !1;
            gu = !0;
        }
        var l, n = !1;
        if (au(c))
            l = $t(c);
        else {
            if ("gtm.js" !== e && "gtm.init" !== e && "gtm.init_consent" !== e)
                return !1;
            n = !0;
            l = $t(Number.MAX_SAFE_INTEGER)
        }
        Gn(c, e);
        var p = a.eventCallback
          , q = a.eventTimeout
          , r = {
            id: c,
            priorityId: d,
            name: e,
            Uf: rs(l),
            fl: [],
            ci: function() {
                R(6);
                wb("HEALTH", 0)
            },
            Qh: iu(),
            Rh: ju(c),
            Ab: new Is(function() {
                if (U(70)) {
                    var y = cr(Yq.F.uh, L.C, c, void 0, e);
                    if (dr(y)) {
                        var A = cr(Yq.F.Tc, L.C, c, void 0, e);
                        er(y, A)
                    }
                    if ("gtm.load" === e) {
                        var B = cr(Yq.F.xg, L.C);
                        if (dr(B)) {
                            var C = cr(Yq.F.Oe, L.C);
                            er(B, C)
                        }
                        Fr();
                    }
                }
                p && p.apply(p, [].slice.call(arguments, 0))
            }
            ,q)
        }
          , t = ef(r);
        n && (t = ku(t));
        if (U(70)) {
            var u = cr(Yq.F.vh, L.C, c, void 0, e);
            if (dr(u)) {
                var v = cr(Yq.F.Tc, L.C, c, void 0, e);
                er(u, v)
            }
        }
        var w = du(t, r)
          , x = !1;
        x = fu(a, r.Ab);
        Ns(r.Ab);
        "gtm.js" !== e && "gtm.sync" !== e || Us(L.C);
        return lu(t, w) || x
    };
    function ju(a) {
        return function(b) {
            Vm && (Uc(b) || Qn(a, "input", b))
        }
    }
    function iu() {
        var a = {};
        a.event = ti("event", 1);
        a.ecommerce = ti("ecommerce", 1);
        a.gtm = ti("gtm");
        a.eventModel = ti("eventModel");
        return a
    }
    function ku(a) {
        for (var b = [], c = 0; c < a.length; c++)
            if (a[c]) {
                var d = String(Le[c][le.Ua]);
                if (Kh[d] || void 0 !== Le[c][le.xj] || hi[d])
                    b[c] = !0;
                U(58) || 0 !== Le[c][le.Ua].indexOf("__ccd") && 0 !== Le[c][le.Ua].indexOf("__ogt") && "__set_product_settings" !== Le[c][le.Ua] || (b[c] = !0)
            }
        return b
    }
    function lu(a, b) {
        if (!b)
            return b;
        for (var c = 0; c < a.length; c++)
            if (a[c] && Le[c] && !Lh[String(Le[c][le.Ua])])
                return !0;
        return !1
    }
    var ou = function(a, b, c, d) {
        nu.push("event", [b, a], c, d)
    }
      , pu = function(a, b, c, d) {
        nu.push("get", [a, b], c, d)
    }
      , qu = function() {
        this.status = 1;
        this.K = {};
        this.h = {};
        this.m = {};
        this.R = null;
        this.D = {};
        this.B = !1
    }
      , ru = function(a, b, c, d) {
        var e = Ua();
        this.type = a;
        this.m = e;
        this.ba = b || "";
        this.h = c;
        this.messageContext = d
    }
      , su = function() {
        this.m = {};
        this.B = {};
        this.h = []
    }
      , tu = function(a, b) {
        var c = Po(b);
        return a.m[c.V] = a.m[c.V] || new qu
    }
      , uu = function(a, b, c, d) {
        if (d.ba) {
            var e = tu(a, d.ba)
              , f = e.R;
            if (f) {
                var g = K(c)
                  , h = K(e.K[d.ba])
                  , l = K(e.D)
                  , n = K(e.h)
                  , p = K(a.B)
                  , q = {};
                if (Vm)
                    try {
                        q = K(li)
                    } catch (v) {
                        R(72)
                    }
                var r = Po(d.ba).prefix
                  , t = function(v) {
                    Pn(d.messageContext.eventId, r, v);
                    var w = g[T.g.ac];
                    w && J(w)
                }
                  , u = Qp(Op(Np(Mp(Kp(Jp(Lp(Ip(Hp(Gp(new Fp(d.messageContext.eventId,d.messageContext.priorityId), g), h), l), n), p), q), d.messageContext.eventMetadata), function() {
                    if (t) {
                        var v = t;
                        t = void 0;
                        v("2")
                    }
                }), function() {
                    if (t) {
                        var v = t;
                        t = void 0;
                        v("3")
                    }
                }));
                try {
                    Pn(d.messageContext.eventId, r, "1"),
                    xs(d.type, d.ba, u),
                    f(d.ba, b, d.m, u)
                } catch (v) {
                    Pn(d.messageContext.eventId, r, "4")
                }
            }
        }
    };
    su.prototype.register = function(a, b, c) {
        var d = tu(this, a);
        3 !== d.status && (d.R = b,
        d.status = 3,
        c && (K(d.h, c),
        d.h = c),
        this.flush())
    }
    ;
    su.prototype.push = function(a, b, c, d) {
        if (void 0 !== c) {
            if (!Po(c))
                return;
            if (c) {
                var e = Po(c);
                e && 1 === tu(this, c).status && (tu(this, c).status = 2,
                this.push("require", [{}], e.V, {}))
            }
            tu(this, c).B && (d.deferrable = !1)
        }
        this.h.push(new ru(a,c,b,d));
        d.deferrable || this.flush()
    }
    ;
    su.prototype.flush = function(a) {
        for (var b = this, c = [], d = !1, e = {}; this.h.length; ) {
            var f = this.h[0];
            if (f.messageContext.deferrable)
                !f.ba || tu(this, f.ba).B ? (f.messageContext.deferrable = !1,
                this.h.push(f)) : c.push(f),
                this.h.shift();
            else {
                var g = void 0;
                switch (f.type) {
                case "require":
                    g = tu(this, f.ba);
                    if (3 !== g.status && !a) {
                        this.h.push.apply(this.h, c);
                        return
                    }
                    break;
                case "set":
                    m(f.h[0], function(r, t) {
                        K(cb(r, t), b.B)
                    });
                    break;
                case "config":
                    g = tu(this, f.ba);
                    e.ob = {};
                    m(f.h[0], function(r) {
                        return function(t, u) {
                            K(cb(t, u), r.ob)
                        }
                    }(e));
                    var h = !!e.ob[T.g.Sc];
                    delete e.ob[T.g.Sc];
                    var l = Po(f.ba)
                      , n = l.V === l.id;
                    h || (n ? g.D = {} : g.K[f.ba] = {});
                    g.B && h || uu(this, T.g.wa, e.ob, f);
                    g.B = !0;
                    n ? K(e.ob, g.D) : (K(e.ob, g.K[f.ba]),
                    R(70));
                    d = !0;
                    break;
                case "event":
                    g = tu(this, f.ba);
                    e.Ad = {};
                    m(f.h[0], function(r) {
                        return function(t, u) {
                            K(cb(t, u), r.Ad)
                        }
                    }(e));
                    uu(this, f.h[1], e.Ad, f);
                    break;
                case "get":
                    g = tu(this, f.ba);
                    var p = {}
                      , q = (p[T.g.hb] = f.h[0],
                    p[T.g.ub] = f.h[1],
                    p);
                    uu(this, T.g.Ia, q, f)
                }
                this.h.shift();
                vu(this, f)
            }
            e = {
                ob: e.ob,
                Ad: e.Ad
            }
        }
        this.h.push.apply(this.h, c);
        d && this.flush()
    }
    ;
    var vu = function(a, b) {
        if ("require" !== b.type)
            if (b.ba)
                for (var c = tu(a, b.ba).m[b.type] || [], d = 0; d < c.length; d++)
                    c[d]();
            else
                for (var e in a.m)
                    if (a.m.hasOwnProperty(e)) {
                        var f = a.m[e];
                        if (f && f.m)
                            for (var g = f.m[b.type] || [], h = 0; h < g.length; h++)
                                g[h]()
                    }
    }
      , wu = function(a, b) {
        var c = nu
          , d = K(b);
        K(tu(c, a).h, d);
        tu(c, a).h = d
    }
      , nu = new su;
    var nf;
    var xu = {}
      , yu = {}
      , zu = function(a) {
        for (var b = [], c = [], d = {}, e = 0; e < a.length; d = {
            Fd: d.Fd,
            Cd: d.Cd
        },
        e++) {
            var f = a[e];
            if (0 <= f.indexOf("-"))
                d.Fd = Po(f),
                d.Fd && (Ka(Al(), function(p) {
                    return function(q) {
                        return p.Fd.V === q
                    }
                }(d)) ? b.push(f) : c.push(f));
            else {
                var g = xu[f] || [];
                d.Cd = {};
                g.forEach(function(p) {
                    return function(q) {
                        return p.Cd[q] = !0
                    }
                }(d));
                for (var h = zl(), l = 0; l < h.length; l++)
                    if (d.Cd[h[l]]) {
                        b = b.concat(Al());
                        break
                    }
                var n = yu[f] || [];
                n.length && (b = b.concat(n))
            }
        }
        return {
            Ak: b,
            Dk: c
        }
    }
      , Au = function(a) {
        m(xu, function(b, c) {
            var d = c.indexOf(a);
            0 <= d && c.splice(d, 1)
        })
    }
      , Bu = function(a) {
        m(yu, function(b, c) {
            var d = c.indexOf(a);
            0 <= d && c.splice(d, 1)
        })
    };
    var Cu = "HA GF G UA AW DC MC".split(" ")
      , Du = !1
      , Eu = !1;
    function Fu(a, b) {
        a.hasOwnProperty("gtm.uniqueEventId") || Object.defineProperty(a, "gtm.uniqueEventId", {
            value: ii()
        });
        b.eventId = a["gtm.uniqueEventId"];
        b.priorityId = a["gtm.priorityId"];
        return {
            eventId: b.eventId,
            priorityId: b.priorityId
        }
    }
    var Gu = {
        config: function(a, b) {
            var c = Fu(a, b);
            if (!(2 > a.length) && k(a[1])) {
                var d = {};
                if (2 < a.length) {
                    if (void 0 != a[2] && !Qc(a[2]) || 3 < a.length)
                        return;
                    d = a[2]
                }
                var e = Po(a[1]);
                if (e) {
                    Gn(c.eventId, "gtag.config");
                    var f = e.V
                      , g = e.id !== f;
                    if (g ? -1 === Al().indexOf(f) : -1 === zl().indexOf(f)) {
                        if (!U(61) || !d[T.g.he]) {
                            var h = d[T.g.ra] || nu.B[T.g.ra];
                            g ? ks(f, h, {
                                source: 2,
                                fromContainerExecution: b.fromContainerExecution
                            }) : js(f, h, !0, {
                                source: 2,
                                fromContainerExecution: b.fromContainerExecution
                            })
                        }
                    } else {
                        if (Nh && !g && !d[T.g.Sc]) {
                            var l = Eu;
                            Eu = !0;
                            if (l)
                                return
                        }
                        Du || R(43);
                        if (!b.noTargetGroup)
                            if (g) {
                                Bu(e.id);
                                var n = e.id
                                  , p = d[T.g.ee] || "default";
                                p = String(p).split(",");
                                for (var q = 0; q < p.length; q++) {
                                    var r = yu[p[q]] || [];
                                    yu[p[q]] = r;
                                    0 > r.indexOf(n) && r.push(n)
                                }
                            } else {
                                Au(e.id);
                                var t = e.id
                                  , u = d[T.g.ee] || "default";
                                u = u.toString().split(",");
                                for (var v = 0; v < u.length; v++) {
                                    var w = xu[u[v]] || [];
                                    xu[u[v]] = w;
                                    0 > w.indexOf(t) && w.push(t)
                                }
                            }
                        delete d[T.g.ee];
                        var x = b.eventMetadata || {};
                        x.hasOwnProperty("is_external_event") || (x.is_external_event = !b.fromContainerExecution);
                        b.eventMetadata = x;
                        delete d[T.g.ac];
                        for (var y = g ? [e.id] : Al(), A = 0; A < y.length; A++) {
                            var B = K(b);
                            nu.push("config", [d], y[A], B)
                        }
                    }
                }
            }
        },
        consent: function(a, b) {
            if (3 === a.length) {
                R(39);
                var c = Fu(a, b)
                  , d = a[1];
                "default" === d ? pl(a[2]) : "update" === d ? ql(a[2], c) : "declare" === d && b.fromContainerExecution && ol(a[2])
            }
        },
        event: function(a, b) {
            var c = a[1];
            if (!(2 > a.length) && k(c)) {
                var d;
                if (2 < a.length) {
                    if (!Qc(a[2]) && void 0 != a[2] || 3 < a.length)
                        return;
                    d = a[2]
                }
                var e = d
                  , f = {}
                  , g = (f.event = c,
                f);
                e && (g.eventModel = K(e),
                e[T.g.ac] && (g.eventCallback = e[T.g.ac]),
                e[T.g.Zd] && (g.eventTimeout = e[T.g.Zd]));
                var h = Fu(a, b)
                  , l = h.eventId
                  , n = h.priorityId;
                g["gtm.uniqueEventId"] = l;
                n && (g["gtm.priorityId"] = n);
                if ("optimize.callback" === c)
                    return g.eventModel = g.eventModel || {},
                    g;
                var p;
                var q = d
                  , r = q && q[T.g.Mb];
                void 0 === r && (r = oi(T.g.Mb, 2),
                void 0 === r && (r = "default"));
                if (k(r) || Ia(r)) {
                    var t = r.toString().replace(/\s+/g, "").split(",")
                      , u = zu(t)
                      , v = u.Ak
                      , w = u.Dk;
                    if (w.length)
                        for (var x = q && q[T.g.ra] || nu.B[T.g.ra], y = 0; y < w.length; y++) {
                            var A = Po(w[y]);
                            A && ks(A.V, x, {
                                source: 3,
                                fromContainerExecution: b.fromContainerExecution
                            })
                        }
                    p = Ro(v)
                } else
                    p = void 0;
                var B = p;
                if (B) {
                    Gn(l, c);
                    for (var C = [], D = 0; D < B.length; D++) {
                        var I = B[D]
                          , G = K(b);
                        if (-1 !== Cu.indexOf(I.prefix)) {
                            var O = K(d)
                              , Q = G.eventMetadata || {};
                            Q.hasOwnProperty("is_external_event") || (Q.is_external_event = !G.fromContainerExecution);
                            G.eventMetadata = Q;
                            delete O[T.g.ac];
                            ou(c, O, I.id, G)
                        }
                        C.push(I.id)
                    }
                    g.eventModel = g.eventModel || {};
                    0 < B.length ? g.eventModel[T.g.Mb] = C.join() : delete g.eventModel[T.g.Mb];
                    Du || R(43);
                    return b.noGtmEvent ? void 0 : g
                }
            }
        },
        get: function(a, b) {
            R(53);
            if (4 === a.length && k(a[1]) && k(a[2]) && Ea(a[3])) {
                var c = Po(a[1])
                  , d = String(a[2])
                  , e = a[3];
                if (c) {
                    Du || R(43);
                    var f = nu.B[T.g.ra];
                    if (!Ka(Al(), function(h) {
                        return c.V === h
                    }))
                        ks(c.V, f, {
                            source: 4,
                            fromContainerExecution: b.fromContainerExecution
                        });
                    else if (-1 !== Cu.indexOf(c.prefix)) {
                        Fu(a, b);
                        var g = {};
                        kl(K((g[T.g.hb] = d,
                        g[T.g.ub] = e,
                        g)));
                        pu(d, function(h) {
                            J(function() {
                                return e(h)
                            })
                        }, c.id, b)
                    }
                }
            }
        },
        js: function(a, b) {
            if (2 == a.length && a[1].getTime) {
                Du = !0;
                var c = Fu(a, b)
                  , d = c.eventId
                  , e = c.priorityId
                  , f = {};
                return f.event = "gtm.js",
                f["gtm.start"] = a[1].getTime(),
                f["gtm.uniqueEventId"] = d,
                f["gtm.priorityId"] = e,
                f
            }
        },
        policy: function(a) {
            if (3 === a.length && k(a[1]) && Ea(a[2])) {
                var b = a[1]
                  , c = a[2]
                  , d = nf.m;
                d.h[b] ? d.h[b].push(c) : d.h[b] = [c];
                if (R(74),
                "all" === a[1]) {
                    R(75);
                    var e = !1;
                    try {
                        e = a[2](L.C, "unknown", {})
                    } catch (f) {}
                    e || R(76)
                }
            } else {
                R(73);
            }
        },
        set: function(a, b) {
            var c;
            2 == a.length && Qc(a[1]) ? c = K(a[1]) : 3 == a.length && k(a[1]) && (c = {},
            Qc(a[2]) || Ia(a[2]) ? c[a[1]] = K(a[2]) : c[a[1]] = a[2]);
            if (c) {
                var d = Fu(a, b)
                  , e = d.eventId
                  , f = d.priorityId;
                K(c);
                var g = K(c);
                nu.push("set", [g], void 0, b);
                c["gtm.uniqueEventId"] = e;
                f && (c["gtm.priorityId"] = f);
                U(30) && delete c.event;
                b.overwriteModelFields = !0;
                return c
            }
        }
    }
      , Hu = {
        policy: !0
    };
    var Iu = function(a) {
        var b = z[Hh.ia].hide;
        if (b && void 0 !== b[a] && b.end) {
            b[a] = !1;
            var c = !0, d;
            for (d in b)
                if (b.hasOwnProperty(d) && !0 === b[d]) {
                    c = !1;
                    break
                }
            c && (b.end(),
            b.end = null)
        }
    }
      , Ju = function(a) {
        var b = z[Hh.ia]
          , c = b && b.hide;
        c && c.end && (c[a] = !0)
    };
    var Ku = !1
      , Lu = [];
    function Mu() {
        if (!Ku) {
            Ku = !0;
            for (var a = 0; a < Lu.length; a++)
                J(Lu[a])
        }
    }
    var Nu = function(a) {
        Ku ? J(a) : Lu.push(a)
    };
    var dv = function(a) {
        if (cv(a))
            return a;
        this.h = a
    };
    dv.prototype.getUntrustedMessageValue = function() {
        return this.h
    }
    ;
    var cv = function(a) {
        return !a || "object" !== Oc(a) || Qc(a) ? !1 : "getUntrustedMessageValue"in a
    };
    dv.prototype.getUntrustedMessageValue = dv.prototype.getUntrustedMessageValue;
    var ev = 0
      , fv = {}
      , gv = []
      , hv = []
      , iv = !1
      , jv = !1;
    function kv(a, b) {
        return a.messageContext.eventId - b.messageContext.eventId || a.messageContext.priorityId - b.messageContext.priorityId
    }
    var lv = function(a) {
        return z[Hh.ia].push(a)
    }
      , mv = function(a, b, c) {
        a.eventCallback = b;
        c && (a.eventTimeout = c);
        return lv(a)
    }
      , nv = function(a, b) {
        var c = Ih[Hh.ia]
          , d = c ? c.subscribers : 1
          , e = 0
          , f = !1
          , g = void 0;
        b && (g = z.setTimeout(function() {
            f || (f = !0,
            a());
            g = void 0
        }, b));
        return function() {
            ++e === d && (g && (z.clearTimeout(g),
            g = void 0),
            f || (a(),
            f = !0))
        }
    };
    function ov(a, b) {
        var c = a._clear || b.overwriteModelFields;
        m(a, function(e, f) {
            "_clear" !== e && (c && ri(e),
            ri(e, f))
        });
        di || (di = a["gtm.start"]);
        var d = a["gtm.uniqueEventId"];
        if (!a.event)
            return !1;
        "number" !== typeof d && (d = ii(),
        a["gtm.uniqueEventId"] = d,
        ri("gtm.uniqueEventId", d));
        return mu(a)
    }
    function pv(a) {
        if (null == a || "object" !== typeof a)
            return !1;
        if (a.event)
            return !0;
        if (Oa(a)) {
            var b = a[0];
            if ("config" === b || "event" === b || "js" === b || "get" === b)
                return !0
        }
        return !1
    }
    function qv() {
        var a;
        if (hv.length)
            a = hv.shift();
        else if (gv.length)
            a = gv.shift();
        else
            return;
        var b;
        var c = a;
        if (iv || !pv(c.message))
            b = c;
        else {
            iv = !0;
            var d = c.message["gtm.uniqueEventId"];
            "number" !== typeof d && (d = c.message["gtm.uniqueEventId"] = ii());
            var e = {}
              , f = {
                message: (e.event = "gtm.init_consent",
                e["gtm.uniqueEventId"] = d - 2,
                e),
                messageContext: {
                    eventId: d - 2
                }
            }
              , g = {}
              , h = {
                message: (g.event = "gtm.init",
                g["gtm.uniqueEventId"] = d - 1,
                g),
                messageContext: {
                    eventId: d - 1
                }
            };
            gv.unshift(h, c);
            if (Vm && L.C) {
                var l;
                if (L.zf) {
                    var n = L.C
                      , p = Cl().destination[n];
                    l = p && p.context
                } else {
                    var q = L.C
                      , r = Cl().container[q];
                    l = r && r.context
                }
                var t = l, u, v = $i(z.location.href);
                u = v.hostname + v.pathname;
                var w = t && t.fromContainerExecution
                  , x = t && t.source
                  , y = L.C
                  , A = L.rb
                  , B = L.zf;
                gn || (gn = u);
                fn.push(y + ";" + A + ";" + (w ? 1 : 0) + ";" + (x || 0) + ";" + (B ? 1 : 0))
            }
            b = f
        }
        return b
    }
    function rv() {
        for (var a = !1, b; !jv && (b = qv()); ) {
            jv = !0;
            delete li.eventModel;
            ni();
            var c = b
              , d = c.message
              , e = c.messageContext;
            if (null == d)
                jv = !1;
            else {
                e.fromContainerExecution && si();
                try {
                    if (Ea(d))
                        try {
                            d.call(pi)
                        } catch (x) {}
                    else if (Ia(d)) {
                        var f = d;
                        if (k(f[0])) {
                            var g = f[0].split(".")
                              , h = g.pop()
                              , l = f.slice(1)
                              , n = oi(g.join("."), 2);
                            if (null != n)
                                try {
                                    n[h].apply(n, l)
                                } catch (x) {}
                        }
                    } else {
                        var p = void 0
                          , q = !1;
                        if (Oa(d)) {
                            a: {
                                if (d.length && k(d[0])) {
                                    var r = Gu[d[0]];
                                    if (r && (!e.fromContainerExecution || !Hu[d[0]])) {
                                        p = r(d, e);
                                        break a
                                    }
                                }
                                p = void 0
                            }
                            (q = p && "set" === d[0] && !!p.event) && R(101)
                        } else
                            p = d;
                        if (p) {
                            var t = ov(p, e);
                            a = t || a;
                            q && t && R(113)
                        }
                    }
                } finally {
                    e.fromContainerExecution && ni(!0);
                    var u = d["gtm.uniqueEventId"];
                    if ("number" === typeof u) {
                        for (var v = fv[String(u)] || [], w = 0; w < v.length; w++)
                            hv.push(sv(v[w]));
                        v.length && hv.sort(kv);
                        delete fv[String(u)];
                        u > ev && (ev = u)
                    }
                    jv = !1
                }
            }
        }
        return !a
    }
    function tv() {
        if (U(70)) {
            var b = cr(Yq.F.Oe, L.C);
            dr(b);
            if (uv()) {
                var c = cr(Yq.F.zg, L.C);
                if (dr(c)) {
                    var d = cr(Yq.F.Qe, L.C);
                    er(c, d)
                }
            }
        }
        var e = rv();
        try {
            Iu(L.C)
        } catch (f) {}
        return e
    }
    function Rt(a) {
        if (ev < a.notBeforeEventId) {
            var b = String(a.notBeforeEventId);
            fv[b] = fv[b] || [];
            fv[b].push(a)
        } else
            hv.push(sv(a)),
            hv.sort(kv),
            J(function() {
                jv || rv()
            })
    }
    function sv(a) {
        return {
            message: a.message,
            messageContext: a.messageContext
        }
    }
    var vv = function() {
        function a(g) {
            var h = {};
            if (cv(g)) {
                var l = g;
                g = cv(l) ? l.getUntrustedMessageValue() : void 0;
                h.fromContainerExecution = !0
            }
            return {
                message: g,
                messageContext: h
            }
        }
        var b = hc(Hh.ia, [])
          , c = Ih[Hh.ia] = Ih[Hh.ia] || {};
        !0 === c.pruned && R(83);
        fv = Pt().get();
        St();
        Es(function() {
            if (!c.gtmDom) {
                c.gtmDom = !0;
                var g = {};
                b.push((g.event = "gtm.dom",
                g))
            }
        });
        Nu(function() {
            if (!c.gtmLoad) {
                c.gtmLoad = !0;
                var g = {};
                b.push((g.event = "gtm.load",
                g))
            }
        });
        c.subscribers = (c.subscribers || 0) + 1;
        var d = b.push;
        b.push = function() {
            var g;
            if (0 < Ih.SANDBOXED_JS_SEMAPHORE) {
                g = [];
                for (var h = 0; h < arguments.length; h++)
                    g[h] = new dv(arguments[h])
            } else
                g = [].slice.call(arguments, 0);
            var l = g.map(function(r) {
                return a(r)
            });
            gv.push.apply(gv, l);
            var n = d.apply(b, g)
              , p = Math.max(100, Number("1000") || 300);
            if (this.length > p)
                for (R(4),
                c.pruned = !0; this.length > p; )
                    this.shift();
            var q = "boolean" !== typeof n || n;
            return rv() && q
        }
        ;
        var e = b.slice(0).map(function(g) {
            return a(g)
        });
        gv.push.apply(gv, e);
        if (uv()) {
            if (U(70)) {
                var f = cr(Yq.F.Qe, L.C);
                dr(f)
            }
            J(tv)
        }
    }
      , uv = function() {
        var a = !0;
        a = !1;
        return a
    };
    function wv(a) {
        if (null == a || 0 === a.length)
            return !1;
        var b = Number(a)
          , c = Ua();
        return b < c + 3E5 && b > c - 9E5
    }
    function xv(a) {
        return a && 0 === a.indexOf("pending:") ? wv(a.substr(8)) : !1
    }
    ;var Qe = {};
    Qe.ne = new String("undefined");
    var Av = function(a, b, c) {
        var d = {
            event: b,
            "gtm.element": a,
            "gtm.elementClasses": xc(a, "className"),
            "gtm.elementId": a["for"] || sc(a, "id") || "",
            "gtm.elementTarget": a.formTarget || xc(a, "target") || ""
        };
        c && (d["gtm.triggers"] = c.join(","));
        d["gtm.elementUrl"] = (a.attributes && a.attributes.formaction ? a.formAction : "") || a.action || xc(a, "href") || a.src || a.code || a.codebase || "";
        return d
    }
      , Bv = function(a) {
        Ih.hasOwnProperty("autoEventsSettings") || (Ih.autoEventsSettings = {});
        var b = Ih.autoEventsSettings;
        b.hasOwnProperty(a) || (b[a] = {});
        return b[a]
    }
      , Cv = function(a, b, c) {
        Bv(a)[b] = c
    }
      , Dv = function(a, b, c, d) {
        var e = Bv(a)
          , f = Wa(e, b, d);
        e[b] = c(f)
    }
      , Ev = function(a, b, c) {
        var d = Bv(a);
        return Wa(d, b, c)
    }
      , Fv = function(a) {
        return "string" === typeof a ? a : String(ii())
    };
    var Lv = !!z.MutationObserver
      , Mv = void 0
      , Nv = function(a) {
        if (!Mv) {
            var b = function() {
                var c = H.body;
                if (c)
                    if (Lv)
                        (new MutationObserver(function() {
                            for (var e = 0; e < Mv.length; e++)
                                J(Mv[e])
                        }
                        )).observe(c, {
                            childList: !0,
                            subtree: !0
                        });
                    else {
                        var d = !1;
                        qc(c, "DOMNodeInserted", function() {
                            d || (d = !0,
                            J(function() {
                                d = !1;
                                for (var e = 0; e < Mv.length; e++)
                                    J(Mv[e])
                            }))
                        })
                    }
            };
            Mv = [];
            H.body ? b() : J(b)
        }
        Mv.push(a)
    };
    var Yv = function(a, b, c) {
        function d() {
            var g = a();
            f += e ? (Ua() - e) * g.playbackRate / 1E3 : 0;
            e = Ua()
        }
        var e = 0
          , f = 0;
        return {
            createEvent: function(g, h, l) {
                var n = a()
                  , p = n.Lf
                  , q = void 0 !== l ? Math.round(l) : void 0 !== h ? Math.round(n.Lf * h) : Math.round(n.Uh)
                  , r = void 0 !== h ? Math.round(100 * h) : 0 >= p ? 0 : Math.round(q / p * 100)
                  , t = H.hidden ? !1 : .5 <= Hk(c);
                d();
                var u = void 0;
                void 0 !== b && (u = [b]);
                var v = Av(c, "gtm.video", u);
                v["gtm.videoProvider"] = "youtube";
                v["gtm.videoStatus"] = g;
                v["gtm.videoUrl"] = n.url;
                v["gtm.videoTitle"] = n.title;
                v["gtm.videoDuration"] = Math.round(p);
                v["gtm.videoCurrentTime"] = Math.round(q);
                v["gtm.videoElapsedTime"] = Math.round(f);
                v["gtm.videoPercent"] = r;
                v["gtm.videoVisible"] = t;
                return v
            },
            li: function() {
                e = Ua()
            },
            mc: function() {
                d()
            }
        }
    };
    var Zv = z.clearTimeout
      , $v = z.setTimeout
      , W = function(a, b, c, d) {
        if (xl()) {
            b && J(b)
        } else
            return mc(a, b, c, d)
    }
      , aw = function() {
        return new Date
    }
      , bw = function() {
        return z.location.href
    }
      , cw = function(a) {
        return Yi($i(a), "fragment")
    }
      , dw = function(a) {
        return Zi($i(a))
    }
      , ew = function(a, b) {
        return oi(a, b || 2)
    }
      , fw = function(a, b, c) {
        return b ? mv(a, b, c) : lv(a)
    }
      , gw = function(a, b) {
        z[a] = b
    }
      , X = function(a, b, c) {
        b && (void 0 === z[a] || c && !z[a]) && (z[a] = b);
        return z[a]
    }
      , hw = function(a, b, c) {
        return jj(a, b, void 0 === c ? !0 : !!c)
    }
      , iw = function(a, b, c) {
        return 0 === sj(a, b, c)
    }
      , jw = function(a, b) {
        if (xl()) {
            b && J(b)
        } else
            oc(a, b)
    }
      , kw = function(a) {
        return !!Ev(a, "init", !1)
    }
      , lw = function(a) {
        Cv(a, "init", !0)
    }
      , mw = function(a, b, c) {
        Vm && (Uc(a) || Qn(c, b, a))
    };
    function Kw(a, b) {
        function c(g) {
            var h = $i(g)
              , l = Yi(h, "protocol")
              , n = Yi(h, "host", !0)
              , p = Yi(h, "port")
              , q = Yi(h, "path").toLowerCase().replace(/\/$/, "");
            if (void 0 === l || "http" === l && "80" === p || "https" === l && "443" === p)
                l = "web",
                p = "default";
            return [l, n, p, q]
        }
        for (var d = c(String(a)), e = c(String(b)), f = 0; f < d.length; f++)
            if (d[f] !== e[f])
                return !1;
        return !0
    }
    function Lw(a) {
        return Mw(a) ? 1 : 0
    }
    function Mw(a) {
        var b = a.arg0
          , c = a.arg1;
        if (a.any_of && Array.isArray(c)) {
            for (var d = 0; d < c.length; d++) {
                var e = K(a, {});
                K({
                    arg1: c[d],
                    any_of: void 0
                }, e);
                if (Lw(e))
                    return !0
            }
            return !1
        }
        switch (a["function"]) {
        case "_cn":
            return Of(b, c);
        case "_css":
            var f;
            a: {
                if (b)
                    try {
                        for (var g = 0; g < Kf.length; g++) {
                            var h = Kf[g];
                            if (b[h]) {
                                f = b[h](c);
                                break a
                            }
                        }
                    } catch (l) {}
                f = !1
            }
            return f;
        case "_ew":
            return Lf(b, c);
        case "_eq":
            return Pf(b, c);
        case "_ge":
            return Qf(b, c);
        case "_gt":
            return Uf(b, c);
        case "_lc":
            return 0 <= String(b).split(",").indexOf(String(c));
        case "_le":
            return Tf(b, c);
        case "_lt":
            return Vf(b, c);
        case "_re":
            return Nf(b, c, a.ignore_case);
        case "_sw":
            return Wf(b, c);
        case "_um":
            return Kw(b, c)
        }
        return !1
    }
    ;function Nw(a, b) {
        var c = this;
    }
    Nw.O = "addConsentListener";
    var Ow;
    var Pw = function(a) {
        for (var b = 0; b < a.length; ++b)
            if (Ow)
                try {
                    a[b]()
                } catch (c) {
                    R(77)
                }
            else
                a[b]()
    };
    function Qw(a, b, c) {
        var d = this, e;
        M(F(this), ["eventName:!string", "callback:!Fn", "triggerId:?string"], arguments),
        Pw([function() {
            return N(d, "listen_data_layer", a)
        }
        ]),
        e = hu().addListener(a, Sc(b), c);
        return e
    }
    Qw.M = "internal.addDataLayerEventListener";
    function Rw(a, b, c) {}
    Rw.O = "addDocumentEventListener";
    function Sw(a, b, c, d) {}
    Sw.O = "addElementEventListener";
    function Tw(a) {}
    Tw.O = "addEventCallback";
    function Xw(a) {}
    Xw.M = "internal.addFormAbandonmentListener";
    var Yw = {}
      , Zw = []
      , $w = {}
      , ax = 0
      , bx = 0;
    function ix(a, b) {}
    ix.M = "internal.addFormInteractionListener";
    function px(a, b) {}
    px.M = "internal.addFormSubmitListener";
    function ux(a) {}
    ux.M = "internal.addGaSendListener";
    var vx = {}
      , wx = [];
    var Dx = function(a, b) {};
    Dx.M = "internal.addHistoryChangeListener";
    function Ex(a, b, c) {}
    Ex.O = "addWindowEventListener";
    function Fx(a, b) {
        return !0
    }
    Fx.O = "aliasInWindow";
    function Gx(a, b, c) {}
    Gx.M = "internal.appendRemoteConfigParameter";
    function Hx() {
        var a = 2;
        return a
    }
    ;function Ix(a, b) {
        var c;
        return c
    }
    Ix.O = "callInWindow";
    function Jx(a) {}
    Jx.O = "callLater";
    function Kx(a) {}
    Kx.M = "callOnDomReady";
    function Lx(a) {}
    Lx.M = "callOnWindowLoad";
    function Mx(a) {
        var b;
        return b
    }
    Mx.M = "internal.computeGtmParameter";
    function Nx(a, b) {
        var c;
        var d = Rc(c, this.h, Hx());
        void 0 === d && void 0 !== c && R(45);
        return d
    }
    Nx.O = "copyFromDataLayer";
    function Ox(a) {
        var b;
        return b
    }
    Ox.O = "copyFromWindow";
    function Px(a, b) {
        var c;
        M(F(this), ["preHit:!DustMap", "dustOptions:?DustMap"], arguments);
        var d = Sc(b) || {}
          , e = Sc(a, this.h, 1).Be()
          , f = new dp(e.target,e.eventName,e.h);
        d.omitHitData || K(e.m, f.m);
        d.omitMetadata ? f.metadata = {} : K(e.metadata, f.metadata);
        f.J = e.J;
        c = Rc(fp(f), this.h, 1);
        return c
    }
    Px.M = "internal.copyPreHit";
    function Qx(a, b) {
        var c = null
          , d = Hx();
        return Rc(c, this.h, d)
    }
    Qx.O = "createArgumentsQueue";
    function Rx(a) {
        var b;
        return Rc(b, this.h, Hx())
    }
    Rx.O = "createQueue";
    function Sx(a) {
        if (!a)
            return {};
        var b = a.Uj;
        return Gs(b.type, b.index, b.name)
    }
    function Tx(a) {
        return a ? {
            originatingEntity: Sx(a)
        } : {}
    }
    ;function Ux(a) {}
    Ux.M = "internal.declareConsentState";
    var Vx = {}
      , Wx = []
      , Xx = {}
      , Yx = 0
      , Zx = 0;
    function ey(a, b) {
        var c = this;
        return b
    }
    ey.M = "internal.enableAutoEventOnFormInteraction";
    function jy(a, b) {
        var c = this;
        return b
    }
    jy.M = "internal.enableAutoEventOnFormSubmit";
    function oy() {
        var a = this;
    }
    oy.M = "internal.enableAutoEventOnGaSend";
    var py = {}
      , qy = [];
    var sy = function(a, b) {
        var c = "" + b;
        if (py[c])
            py[c].push(a);
        else {
            var d = [a];
            py[c] = d;
            var e = ry()
              , f = -1;
            qy.push(function(g) {
                0 <= f && z.clearTimeout(f);
                b ? f = z.setTimeout(function() {
                    e(g, d);
                    f = -1
                }, b) : e(g, d)
            })
        }
    }
      , ry = function() {
        var a = z.location.href
          , b = {
            source: null,
            state: z.history.state || null,
            url: Zi($i(a)),
            P: Yi($i(a), "fragment")
        };
        return function(c, d) {
            var e = b
              , f = {};
            f[e.source] = !0;
            f[c.source] = !0;
            if (!f.popstate || !f.hashchange || e.P != c.P) {
                var g = {}
                  , h = (g.event = "gtm.historyChange-v2",
                g["gtm.historyChangeSource"] = c.source,
                g["gtm.oldUrlFragment"] = b.P,
                g["gtm.newUrlFragment"] = c.P,
                g["gtm.oldHistoryState"] = b.state,
                g["gtm.newHistoryState"] = c.state,
                g["gtm.oldUrl"] = b.url,
                g["gtm.newUrl"] = c.url,
                g["gtm.triggers"] = d.join(","),
                g);
                b = c;
                lv(h)
            }
        }
    }
      , ty = function(a, b) {
        var c = z.history
          , d = c[a];
        if (Ea(d))
            try {
                c[a] = function(e, f, g) {
                    d.apply(c, [].slice.call(arguments, 0));
                    var h = z.location.href;
                    b({
                        source: a,
                        state: e,
                        url: Zi($i(h)),
                        P: Yi($i(h), "fragment")
                    })
                }
            } catch (e) {}
    }
      , vy = function(a) {
        z.addEventListener("popstate", function(b) {
            var c = uy(b);
            a({
                source: "popstate",
                state: b.state,
                url: Zi($i(c)),
                P: Yi($i(c), "fragment")
            })
        })
    }
      , wy = function(a) {
        z.addEventListener("hashchange", function(b) {
            var c = uy(b);
            a({
                source: "hashchange",
                state: null,
                url: Zi($i(c)),
                P: Yi($i(c), "fragment")
            })
        })
    }
      , uy = function(a) {
        return a.target && a.target.location && a.target.location.href ? a.target.location.href : z.location.href
    };
    function xy(a, b) {
        var c = this;
        M(F(this), ["options:?DustMap", "triggerId:?*"], arguments);
        Pw([function() {
            return N(c, "process_dom_events", "window", "popstate")
        }
        , function() {
            return N(c, "process_dom_events", "window", "pushstate")
        }
        ]);
        b = Fv(b);
        var d = Number(a && a.get("interval"));
        0 < d && isFinite(d) || (d = 0);
        if (Ev("ehl", "init", !1)) {
            var e = Ev("ehl", "reg");
            e && e(b, d)
        } else {
            var f = function(g) {
                for (var h = 0; h < qy.length; h++)
                    qy[h](g)
            };
            wy(f);
            vy(f);
            ty("pushState", f);
            ty("replaceState", f);
            sy(b, d);
            Cv("ehl", "reg", sy);
            Cv("ehl", "init", !0)
        }
        return b
    }
    xy.M = "internal.enableAutoEventOnHistoryChange";
    var yy = function(a, b) {
        if (2 === a.which || a.ctrlKey || a.shiftKey || a.altKey || a.metaKey)
            return !1;
        var c = xc(b, "href")
          , d = c.indexOf("#")
          , e = xc(b, "target");
        if (e && "_self" !== e && "_parent" !== e && "_top" !== e || 0 === d)
            return !1;
        if (0 < d) {
            var f = Zi($i(c))
              , g = Zi($i(z.location.href));
            return f !== g
        }
        return !0
    }
      , zy = function(a, b) {
        for (var c = Yi($i((b.attributes && b.attributes.formaction ? b.formAction : "") || b.action || xc(b, "href") || b.src || b.code || b.codebase || ""), "host"), d = 0; d < a.length; d++)
            try {
                if ((new RegExp(a[d])).test(c))
                    return !1
            } catch (e) {}
        return !0
    }
      , Ay = function() {
        var a = 0
          , b = function(c) {
            var d = c.target;
            if (d && 3 !== c.which && !(c.Vf || c.timeStamp && c.timeStamp === a)) {
                a = c.timeStamp;
                d = vc(d, ["a", "area"], 100);
                if (!d)
                    return c.returnValue;
                var e = c.defaultPrevented || !1 === c.returnValue, f = Ev("aelc", e ? "nv.mwt" : "mwt", 0), g;
                g = e ? Ev("aelc", "nv.ids", []) : Ev("aelc", "ids", []);
                for (var h = [], l = 0; l < g.length; l++) {
                    var n = g[l]
                      , p = Ev("aelc", "aff.map", {})[n];
                    p && !zy(p, d) || h.push(n)
                }
                if (h.length) {
                    var q = yy(c, d)
                      , r = Av(d, "gtm.linkClick", h);
                    r["gtm.elementText"] = tc(d);
                    r["gtm.willOpenInNewWindow"] = !q;
                    if (q && !e && f && d.href) {
                        var t = !!Ka(String(xc(d, "rel") || "").split(" "), function(x) {
                            return "noreferrer" === x.toLowerCase()
                        })
                          , u = z[(xc(d, "target") || "_self").substring(1)]
                          , v = !0
                          , w = nv(function() {
                            var x;
                            if (x = v && u) {
                                var y;
                                a: if (t) {
                                    var A;
                                    try {
                                        A = new MouseEvent(c.type,{
                                            bubbles: !0
                                        })
                                    } catch (B) {
                                        if (!H.createEvent) {
                                            y = !1;
                                            break a
                                        }
                                        A = H.createEvent("MouseEvents");
                                        A.initEvent(c.type, !0, !0)
                                    }
                                    A.Vf = !0;
                                    c.target.dispatchEvent(A);
                                    y = !0
                                } else
                                    y = !1;
                                x = !y
                            }
                            x && (u.location.href = xc(d, "href"))
                        }, f);
                        if (mv(r, w, f))
                            v = !1;
                        else
                            return c.preventDefault && c.preventDefault(),
                            c.returnValue = !1
                    } else
                        mv(r, function() {}, f || 2E3);
                    return !0
                }
            }
        };
        qc(H, "click", b, !1);
        qc(H, "auxclick", b, !1)
    };
    function By(a, b) {
        var c = this;
        M(F(this), ["dustOptions:?DustMap", "triggerId:?*"], arguments);
        Pw([function() {
            return N(c, "process_dom_events", "document", "click")
        }
        , function() {
            return N(c, "process_dom_events", "document", "auxclick")
        }
        ]);
        var d = Sc(a)
          , e = d && !!d.waitForTags
          , f = d && !!d.checkValidation
          , g = d ? d.affiliateDomains : void 0;
        b = Fv(b);
        if (e) {
            var h = Number(d.waitForTagsTimeout);
            0 < h && isFinite(h) || (h = 2E3);
            var l = function(p) {
                return Math.max(h, p)
            };
            Dv("aelc", "mwt", l, 0);
            f || Dv("aelc", "nv.mwt", l, 0)
        }
        var n = function(p) {
            p.push(b);
            return p
        };
        Dv("aelc", "ids", n, []);
        f || Dv("aelc", "nv.ids", n, []);
        g && Dv("aelc", "aff.map", function(p) {
            p[b] = g;
            return p
        }, {});
        Ev("aelc", "init", !1) || (Ay(),
        Cv("aelc", "init", !0));
        return b
    }
    By.M = "internal.enableAutoEventOnLinkClick";
    var Cy, Dy;
    var Ey = function(a) {
        return Ev("sdl", a, {})
    }
      , Fy = function(a, b, c) {
        b && (Array.isArray(a) || (a = [a]),
        Dv("sdl", c, function(d) {
            for (var e = 0; e < a.length; e++) {
                var f = String(a[e]);
                d.hasOwnProperty(f) || (d[f] = []);
                d[f].push(b)
            }
            return d
        }, {}))
    }
      , Iy = function() {
        var a = 250
          , b = !1;
        H.scrollingElement && H.documentElement && z.addEventListener && (a = 50,
        b = !0);
        var c = 0
          , d = !1
          , e = function() {
            d ? c = z.setTimeout(e, a) : (c = 0,
            Gy(),
            Ev("sdl", "init", !1) && !Hy() && (rc(z, "scroll", f),
            rc(z, "resize", f),
            Cv("sdl", "init", !1)));
            d = !1
        }
          , f = function() {
            b && Cy();
            c ? d = !0 : (c = z.setTimeout(e, a),
            Cv("sdl", "pending", !0))
        };
        return f
    }
      , Gy = function() {
        var a = Cy()
          , b = a.Jf
          , c = a.Kf
          , d = b / Dy.scrollWidth * 100
          , e = c / Dy.scrollHeight * 100;
        Jy(b, "horiz.pix", "PIXELS", "horizontal");
        Jy(d, "horiz.pct", "PERCENT", "horizontal");
        Jy(c, "vert.pix", "PIXELS", "vertical");
        Jy(e, "vert.pct", "PERCENT", "vertical");
        Cv("sdl", "pending", !1)
    }
      , Jy = function(a, b, c, d) {
        var e = Ey(b), f = {}, g;
        for (g in e) {
            f.Tb = g;
            if (e.hasOwnProperty(f.Tb)) {
                var h = Number(f.Tb);
                if (!(a < h)) {
                    var l = {};
                    lv((l.event = "gtm.scrollDepth",
                    l["gtm.scrollThreshold"] = h,
                    l["gtm.scrollUnits"] = c.toLowerCase(),
                    l["gtm.scrollDirection"] = d,
                    l["gtm.triggers"] = e[f.Tb].join(","),
                    l));
                    Dv("sdl", b, function(n) {
                        return function(p) {
                            delete p[n.Tb];
                            return p
                        }
                    }(f), {})
                }
            }
            f = {
                Tb: f.Tb
            }
        }
    }
      , Ly = function() {
        Dv("sdl", "scr", function(a) {
            a || (a = H.scrollingElement || H.body && H.body.parentNode);
            return Dy = a
        }, !1);
        Dv("sdl", "depth", function(a) {
            a || (a = Ky());
            return Cy = a
        }, !1)
    }
      , Ky = function() {
        var a = 0
          , b = 0;
        return function() {
            var c = Gk()
              , d = c.height;
            a = Math.max(Dy.scrollLeft + c.width, a);
            b = Math.max(Dy.scrollTop + d, b);
            return {
                Jf: a,
                Kf: b
            }
        }
    }
      , Hy = function() {
        return !!(Object.keys(Ey("horiz.pix")).length || Object.keys(Ey("horiz.pct")).length || Object.keys(Ey("vert.pix")).length || Object.keys(Ey("vert.pct")).length)
    };
    function My(a, b) {
        var c = this;
        M(F(this), ["options:!DustMap", "triggerId:?*"], arguments);
        Pw([function() {
            return N(c, "process_dom_events", "window", "resize")
        }
        , function() {
            return N(c, "process_dom_events", "window", "scroll")
        }
        ]);
        Ly();
        if (!Dy)
            return;
        b = Fv(b);
        var d = Sc(a);
        switch (d.horizontalThresholdUnits) {
        case "PIXELS":
            Fy(d.horizontalThresholds, b, "horiz.pix");
            break;
        case "PERCENT":
            Fy(d.horizontalThresholds, b, "horiz.pct")
        }
        switch (d.verticalThresholdUnits) {
        case "PIXELS":
            Fy(d.verticalThresholds, b, "vert.pix");
            break;
        case "PERCENT":
            Fy(d.verticalThresholds, b, "vert.pct")
        }
        Ev("sdl", "init", !1) ? Ev("sdl", "pending", !1) || J(function() {
            return Gy()
        }) : (Cv("sdl", "init", !0),
        Cv("sdl", "pending", !0),
        J(function() {
            Gy();
            if (Hy()) {
                var e = Iy();
                qc(z, "scroll", e);
                qc(z, "resize", e)
            } else
                Cv("sdl", "init", !1)
        }));
        return b
    }
    My.M = "internal.enableAutoEventOnScroll";
    var cc = ea(["data-gtm-yt-inspected-"]), Ny = ["www.youtube.com", "www.youtube-nocookie.com"], Oy, Py = !1;
    var Qy = function(a, b, c) {
        var d = a.map(function(g) {
            return {
                oa: g,
                vd: g,
                sd: void 0
            }
        });
        if (!b.length)
            return d;
        var e = b.map(function(g) {
            return {
                oa: g * c,
                vd: void 0,
                sd: g
            }
        });
        if (!d.length)
            return e;
        var f = d.concat(e);
        f.sort(function(g, h) {
            return g.oa - h.oa
        });
        return f
    }
      , Ry = function(a) {
        a = void 0 === a ? [] : a;
        for (var b = [], c = 0; c < a.length; c++)
            0 > a[c] || b.push(a[c]);
        b.sort(function(d, e) {
            return d - e
        });
        return b
    }
      , Sy = function(a) {
        a = void 0 === a ? [] : a;
        for (var b = [], c = 0; c < a.length; c++)
            100 < a[c] || 0 > a[c] || (b[c] = a[c] / 100);
        b.sort(function(d, e) {
            return d - e
        });
        return b
    }
      , Ty = function(a, b) {
        var c, d;
        function e() {
            t = Yv(function() {
                return {
                    url: w,
                    title: x,
                    Lf: v,
                    Uh: a.getCurrentTime(),
                    playbackRate: y
                }
            }, b.Xa, a.getIframe());
            v = 0;
            x = w = "";
            y = 1;
            return f
        }
        function f(D) {
            switch (D) {
            case 1:
                v = Math.round(a.getDuration());
                w = a.getVideoUrl();
                if (a.getVideoData) {
                    var I = a.getVideoData();
                    x = I ? I.title : ""
                }
                y = a.getPlaybackRate();
                b.Gf ? lv(t.createEvent("start")) : t.mc();
                u = Qy(b.mg, b.lg, a.getDuration());
                return g(D);
            default:
                return f
            }
        }
        function g() {
            A = a.getCurrentTime();
            B = Ta().getTime();
            t.li();
            r();
            return h
        }
        function h(D) {
            var I;
            switch (D) {
            case 0:
                return n(D);
            case 2:
                I = "pause";
            case 3:
                var G = a.getCurrentTime() - A;
                I = 1 < Math.abs((Ta().getTime() - B) / 1E3 * y - G) ? "seek" : I || "buffering";
                a.getCurrentTime() && (b.Ff ? lv(t.createEvent(I)) : t.mc());
                q();
                return l;
            case -1:
                return e(D);
            default:
                return h
            }
        }
        function l(D) {
            switch (D) {
            case 0:
                return n(D);
            case 1:
                return g(D);
            case -1:
                return e(D);
            default:
                return l
            }
        }
        function n() {
            for (; d; ) {
                var D = c;
                z.clearTimeout(d);
                D()
            }
            b.Ef && lv(t.createEvent("complete", 1));
            return e(-1)
        }
        function p() {}
        function q() {
            d && (z.clearTimeout(d),
            d = 0,
            c = p)
        }
        function r() {
            if (u.length && 0 !== y) {
                var D = -1, I;
                do {
                    I = u[0];
                    if (I.oa > a.getDuration())
                        return;
                    D = (I.oa - a.getCurrentTime()) / y;
                    if (0 > D && (u.shift(),
                    0 === u.length))
                        return
                } while (0 > D);
                c = function() {
                    d = 0;
                    c = p;
                    0 < u.length && u[0].oa === I.oa && (u.shift(),
                    lv(t.createEvent("progress", I.sd, I.vd)));
                    r()
                }
                ;
                d = z.setTimeout(c, 1E3 * D)
            }
        }
        var t, u = [], v, w, x, y, A, B, C = e(-1);
        d = 0;
        c = p;
        return {
            onStateChange: function(D) {
                C = C(D)
            },
            onPlaybackRateChange: function(D) {
                A = a.getCurrentTime();
                B = Ta().getTime();
                t.mc();
                y = D;
                q();
                r()
            }
        }
    }
      , Vy = function(a) {
        J(function() {
            function b() {
                for (var d = c.getElementsByTagName("iframe"), e = d.length, f = 0; f < e; f++)
                    Uy(d[f], a)
            }
            var c = H;
            b();
            Nv(b)
        })
    }
      , Uy = function(a, b) {
        if (!a.getAttribute("data-gtm-yt-inspected-" + b.Xa) && (bc(a, "data-gtm-yt-inspected-" + b.Xa),
        Wy(a, b.gd))) {
            a.id || (a.id = Xy());
            var c = z.YT
              , d = c.get(a.id);
            d || (d = new c.Player(a.id));
            var e = Ty(d, b), f = {}, g;
            for (g in e)
                f.zc = g,
                e.hasOwnProperty(f.zc) && d.addEventListener(f.zc, function(h) {
                    return function(l) {
                        return e[h.zc](l.data)
                    }
                }(f)),
                f = {
                    zc: f.zc
                }
        }
    }
      , Wy = function(a, b) {
        var c = a.getAttribute("src");
        if (Yy(c, "embed/")) {
            if (0 < c.indexOf("enablejsapi=1"))
                return !0;
            if (b) {
                var d;
                var e = -1 !== c.indexOf("?") ? "&" : "?";
                -1 < c.indexOf("origin=") ? d = c + e + "enablejsapi=1" : (Oy || (Oy = H.location.protocol + "//" + H.location.hostname,
                H.location.port && (Oy += ":" + H.location.port)),
                d = c + e + "enablejsapi=1&origin=" + encodeURIComponent(Oy));
                var f;
                f = Fb(d);
                a.src = Eb(f).toString();
                return !0
            }
        }
        return !1
    }
      , Yy = function(a, b) {
        if (!a)
            return !1;
        for (var c = 0; c < Ny.length; c++)
            if (0 <= a.indexOf("//" + Ny[c] + "/" + b))
                return !0;
        return !1
    }
      , Xy = function() {
        var a = Math.round(1E9 * Math.random()) + "";
        return H.getElementById(a) ? Xy() : a
    };
    function Zy(a, b) {
        var c = this;
        M(F(this), ["dustOptions:!DustMap", "triggerId:?*"], arguments);
        Pw([function() {
            return N(c, "process_dom_events", "element", "onStateChange")
        }
        , function() {
            return N(c, "process_dom_events", "element", "onPlaybackRateChange")
        }
        ]);
        b = Fv(b);
        var d = !!a.get("captureStart")
          , e = !!a.get("captureComplete")
          , f = !!a.get("capturePause")
          , g = Sy(Sc(a.get("progressThresholdsPercent")))
          , h = Ry(Sc(a.get("progressThresholdsTimeInSeconds")))
          , l = !!a.get("fixMissingApi");
        if (!(d || e || f || g.length || h.length))
            return;
        var n = {
            Gf: d,
            Ef: e,
            Ff: f,
            lg: g,
            mg: h,
            gd: l,
            Xa: b
        }
          , p = z.YT
          , q = function() {
            Vy(n)
        };
        if (p)
            return p.ready && p.ready(q),
            b;
        var r = z.onYouTubeIframeAPIReady;
        z.onYouTubeIframeAPIReady = function() {
            r && r();
            q()
        }
        ;
        J(function() {
            for (var t = H.getElementsByTagName("script"), u = t.length, v = 0; v < u; v++) {
                var w = t[v].getAttribute("src");
                if (Yy(w, "iframe_api") || Yy(w, "player_api"))
                    return b
            }
            for (var x = H.getElementsByTagName("iframe"), y = x.length, A = 0; A < y; A++)
                if (!Py && Wy(x[A], n.gd))
                    return mc("https://www.youtube.com/iframe_api"),
                    Py = !0,
                    b
        });
        return b
    }
    Zy.M = "internal.enableAutoEventOnYouTubeActivity";
    var $y;
    function az(a) {
        var b = !1;
        return b
    }
    az.M = "internal.evaluateMatchingRules";
    var dz = function(a, b, c) {
        if (c)
            switch (c.type) {
            case "event_name":
                return a;
            case "const":
                return c.const_value;
            case "event_param":
                var d = c.event_param.param_name;
                if (d === T.g.ic)
                    return bz(b);
                if (d === T.g.bh)
                    return cz(b);
                return b[d]
            }
    }
      , hz = function(a, b, c, d) {
        ez = !1;
        if (c && !fz(a, b, c))
            return !1;
        if (!d || 0 === d.length)
            return !0;
        for (var e = 0; e < d.length; e++)
            if (gz(a, b, d[e].predicates || []))
                return !0;
        return !1
    }
      , gz = function(a, b, c) {
        for (var d = 0; d < c.length; d++)
            if (!fz(a, b, c[d]))
                return !1;
        return !0
    }
      , fz = function(a, b, c) {
        var d = c.values || []
          , e = dz(a, b, d[0])
          , f = dz(a, b, d[1])
          , g = c.type;
        if ("eqi" === g || "swi" === g || "ewi" === g || "cni" === g)
            k(e) && (e = e.toLowerCase()),
            k(f) && (f = f.toLowerCase());
        var h = !1;
        switch (g) {
        case "eq":
        case "eqi":
            h = Pf(e, f);
            break;
        case "sw":
        case "swi":
            h = Wf(e, f);
            break;
        case "ew":
        case "ewi":
            h = Lf(e, f);
            break;
        case "cn":
        case "cni":
            h = Of(e, f);
            break;
        case "lt":
            h = Vf(e, f);
            break;
        case "le":
            h = Tf(e, f);
            break;
        case "gt":
            h = Uf(e, f);
            break;
        case "ge":
            h = Qf(e, f);
            break;
        case "re":
        case "rei":
            void 0 !== e && (h = Nf(e, f, "rei" === g))
        }
        return !!c.negate !== h
    }
      , ez = !1;
    var bz = function(a) {
        var b = a[T.g.ic];
        if (b)
            return b;
        ez = !0;
        var c = a[T.g.za];
        if (k(c)) {
            var d = U(57);
            if (Ea(URL))
                try {
                    var e = new URL(c);
                    return e.pathname + iz(d ? e.search : "")
                } catch (h) {
                    return
                }
            var f = $i(c);
            if (f.hostname) {
                var g = d ? Yi(f, "query") : "";
                g && (g = "?" + g);
                return Yi(f, "path") + iz(g)
            }
        }
    }
      , iz = function(a) {
        if (!U(72) || !a)
            return a;
        var b = a.split("&")
          , c = [];
        b[0] = b[0].substring(1);
        for (var d = 0; d < b.length; d++) {
            var e = b[d]
              , f = e.indexOf("=");
            jz[0 <= f ? e.substring(0, f) : e] || c.push(b[d])
        }
        return c.length ? "?" + c.join("&") : ""
    }
      , jz = Object.freeze({
        __utma: 1,
        __utmb: 1,
        __utmc: 1,
        __utmk: 1,
        __utmv: 1,
        __utmx: 1,
        __utmz: 1,
        __ga: 1,
        _gac: 1,
        _gl: 1,
        dclid: 1,
        gbraid: 1,
        gclid: 1,
        gclsrc: 1,
        utm_campaign: 1,
        utm_content: 1,
        utm_expid: 1,
        utm_id: 1,
        utm_medium: 1,
        utm_nooverride: 1,
        utm_referrer: 1,
        utm_source: 1,
        utm_term: 1,
        wbraid: 1
    });
    var cz = function(a) {
        var b = a[T.g.bh];
        if (b)
            return b;
        var c = a[T.g.za];
        if (k(c)) {
            if (Ea(URL))
                try {
                    return (new URL(c)).hostname
                } catch (e) {
                    return
                }
            var d = $i(c);
            if (d.hostname)
                return Yi(d, "host")
        }
    };
    function kz(a, b) {
        var c = !1;
        return c
    }
    kz.M = "internal.evaluatePredicates";
    var lz = function(a) {
        var b;
        return b
    };
    function mz(a, b) {
        b = void 0 === b ? !0 : b;
        var c;
        return c
    }
    mz.O = "getCookieValues";
    function nz() {
        return wk()
    }
    nz.M = "internal.getCountryCode";
    function oz() {
        var a = [];
        a = Al();
        return Rc(a)
    }
    oz.M = "internal.getDestinationIds";
    function pz(a) {
        var b = null;
        return b
    }
    pz.O = "getElementById";
    var qz = {};
    qz.enableAdsConversionValidation = U(83);
    qz.enableAdsHistoryChangeEvents = U(36);
    qz.enableAlwaysSendFormStart = U(38);
    qz.enableCcdAutoRedaction = U(92);
    qz.enableCcdEmForm = U(82);
    qz.enableCcdEnhancedMeasurement = U(41);
    qz.enableCcdEventBlocking = U(40);
    qz.enableCcdEventEditingAndCreation = U(26);
    qz.enableCcdGaConversions = U(39);
    qz.enableCcdPreAutoPiiDetection = U(49);
    qz.enableCcdUserData = U(16);
    qz.enableEesPagePath = U(43);
    qz.enableEuidAutoMode = U(37);
    qz.enableGa4OnoRemarketing = U(34);
    qz.enableGaGamWindowSet = U(67);
    qz.enableGtagConfigApi = U(95);
    qz.includeQueryInEesPagePath = U(57);
    qz.pixieWebDeclareConsentState = U(85);
    qz.useEnableAutoEventOnFormApis = U(91);
    qz.autoPiiEligible = zk();
    function rz() {
        return Rc(qz)
    }
    rz.M = "internal.getFlags";
    function sz(a, b) {
        var c;
        M(F(this), ["targetId:!string", "name:!string"], arguments);
        var d = Dk(a) || {};
        c = Rc(d[b], this.h);
        return c
    }
    sz.M = "internal.getProductSettingsParameter";
    function tz(a, b) {
        var c;
        M(F(this), ["queryKey:!string", "retrieveAll:?boolean"], arguments);
        N(this, "get_url", "query", a);
        var d = Yi($i(z.location.href), "query")
          , e = Vi(d, a, b);
        c = Rc(e, this.h);
        return c
    }
    tz.O = "getQueryParameters";
    function uz(a, b) {
        var c;
        return c
    }
    uz.O = "getReferrerQueryParameters";
    function vz(a) {
        var b = "";
        return b
    }
    vz.O = "getReferrerUrl";
    function wz() {
        return xk()
    }
    wz.M = "internal.getRegionCode";
    function xz(a, b) {
        var c;
        M(F(this), ["targetId:!string", "name:!string"], arguments);
        var d = tu(nu, a).h;
        c = Rc(d[b], this.h);
        return c
    }
    xz.M = "internal.getRemoteConfigParameter";
    function yz(a) {
        var b = "";
        M(F(this), ["component:?string"], arguments),
        N(this, "get_url", a),
        b = Yi($i(z.location.href), a);
        return b
    }
    yz.O = "getUrl";
    function zz() {
        N(this, "get_user_agent");
        return fc.userAgent
    }
    zz.O = "getUserAgent";
    var Az = function(a) {
        var b = !1;
        return b
    }
      , Bz = function(a) {
        var b;
        if (U(87)) {
            var c = !1;
            if (U(87)) {
                var d;
                c = null != (d = uk["2"]) ? d : !1
            }
            b = c
        } else
            b = ep(a, T.g.af, !1);
        return b
    }
      , Cz = function(a) {
        var b;
        if (U(87)) {
            var c = "";
            if (U(87)) {
                var d;
                c = null != (d = uk["3"]) ? d : ""
            }
            b = c
        } else
            b = ep(a, T.g.de, V(a.h, T.g.de)) || "";
        return b
    }
      , Dz = function(a) {
        if (a.metadata.is_merchant_center)
            return !1;
        var b = V(a.h, T.g.ae);
        return !(!0 !== b && "true" !== b || !V(a.h, T.g.ra))
    }
      , Ez = function(a) {
        var b = a.metadata.user_data;
        if (Qc(b))
            return b
    }
      , Fz = function(a, b) {
        var c = ep(a, T.g.Yd, a.h.B[T.g.Yd]);
        if (c && void 0 !== c[b || a.eventName])
            return c[b || a.eventName]
    }
      , Gz = function(a, b, c) {
        a.m[T.g.Yc] || (a.m[T.g.Yc] = {});
        a.m[T.g.Yc][b] = c
    };
    var Hz = !1
      , Iz = function(a) {
        var b = a.eventName === T.g.Gc && Ni() && Dz(a)
          , c = a.metadata.batch_on_navigation
          , d = a.metadata.is_conversion
          , e = a.metadata.is_session_start
          , f = a.metadata.create_dc_join
          , g = a.metadata.create_google_join
          , h = a.metadata.euid_mode_enabled && !!Ez(a);
        return !(!fc.sendBeacon || d || h || e || f || g || b || !c && Hz)
    };
    var Jz = function(a) {
        wb("GA4_EVENT", a)
    };
    var Lz = function(a) {
        return !a || Kz.test(a) || wh.hasOwnProperty(a)
    }
      , Mz = function(a, b, c) {
        for (var d = c.event_param_ops || [], e = 0; e < d.length; e++) {
            var f = d[e];
            if (f.edit_param) {
                var g = f.edit_param.param_name, h = dz(a, b, f.edit_param.param_value), l;
                if (h) {
                    var n = Number(h);
                    l = isNaN(n) ? h : n
                } else
                    l = h;
                b[g] = l
            } else
                f.delete_param && delete b[f.delete_param.param_name]
        }
    }
      , Kz = /^(_|ga_|google_|gtag\.|firebase_).*$/;
    var Nz = function(a) {
        var b = 0
          , c = 0;
        return {
            start: function() {
                b = Ua()
            },
            stop: function() {
                c = this.get()
            },
            get: function() {
                var d = 0;
                a.Xf() && (d = Ua() - b);
                return d + c
            }
        }
    }
      , Oz = function() {
        this.h = void 0;
        this.m = 0;
        this.isActive = this.isVisible = this.B = !1;
        this.K = this.D = void 0
    };
    ca = Oz.prototype;
    ca.pj = function(a) {
        var b = this;
        if (!this.h) {
            this.B = H.hasFocus();
            this.isVisible = !H.hidden;
            this.isActive = !0;
            var c = function(d, e, f) {
                qc(d, e, function(g) {
                    b.h.stop();
                    f(g);
                    b.Xf() && b.h.start()
                })
            };
            c(z, "focus", function() {
                b.B = !0
            });
            c(z, "blur", function() {
                b.B = !1
            });
            c(z, "pageshow", function(d) {
                b.isActive = !0;
                d.persisted && R(56);
                b.K && b.K()
            });
            c(z, "pagehide", function() {
                b.isActive = !1;
                b.D && b.D()
            });
            c(H, "visibilitychange", function() {
                b.isVisible = !H.hidden
            });
            Dz(a) && -1 === (fc.userAgent || "").indexOf("Firefox") && -1 === (fc.userAgent || "").indexOf("FxiOS") && c(z, "beforeunload", function() {
                Hz = !0
            });
            this.og();
            this.m = 0
        }
    }
    ;
    ca.og = function() {
        this.m += this.Ae();
        this.h = Nz(this);
        this.Xf() && this.h.start()
    }
    ;
    ca.ml = function(a) {
        var b = this.Ae();
        0 < b && (a.m[T.g.Wd] = b)
    }
    ;
    ca.hk = function(a) {
        a.m[T.g.Wd] = void 0;
        this.og();
        this.m = 0
    }
    ;
    ca.Xf = function() {
        return this.B && this.isVisible && this.isActive
    }
    ;
    ca.ek = function() {
        return this.m + this.Ae()
    }
    ;
    ca.Ae = function() {
        return this.h && this.h.get() || 0
    }
    ;
    ca.Qk = function(a) {
        this.D = a
    }
    ;
    ca.ji = function(a) {
        this.K = a
    }
    ;
    function Pz() {
        return z.gaGlobal = z.gaGlobal || {}
    }
    var Qz = function() {
        var a = Pz();
        a.hid = a.hid || La();
        return a.hid
    }
      , Rz = function(a, b) {
        var c = Pz();
        if (void 0 == c.vid || b && !c.from_cookie)
            c.vid = a,
            c.from_cookie = b
    };
    var Sz = function(a, b, c) {
        var d = a.metadata.client_id_source;
        if (void 0 === d || c <= d)
            a.m[T.g.tb] = b,
            a.metadata.client_id_source = c
    }
      , Vz = function(a, b) {
        var c;
        var d = b.metadata.cookie_options
          , e = d.prefix + "_ga"
          , f = Bj(d, void 0, void 0, T.g.U);
        if (!1 === V(b.h, T.g.Gb) && Tz(b) === a)
            c = !0;
        else {
            var g = Aj(a, Uz[0], d.domain, d.path);
            c = 1 !== sj(e, g, f)
        }
        return c
    }
      , Tz = function(a) {
        var b = a.metadata.cookie_options
          , c = b.prefix + "_ga"
          , d = zj(c, b.domain, b.path, Uz, T.g.U);
        if (!d) {
            var e = String(V(a.h, T.g.Zb, ""));
            e && e != c && (d = zj(e, b.domain, b.path, Uz, T.g.U))
        }
        return d
    }
      , Uz = ["GA1"]
      , Wz = function(a, b) {
        var c = a.m[T.g.tb];
        if (b && c === b)
            return c;
        if (c) {
            c = "" + c;
            if (!Vz(c, a))
                return R(31),
                a.J = !0,
                "";
            Rz(c, rl(T.g.U));
            return c
        }
        R(32);
        a.J = !0;
        return ""
    };
    var Zz = function(a, b, c) {
        if (!b)
            return a;
        if (!a)
            return b;
        var d = Xz(a);
        if (!d)
            return b;
        var e, f = Pa(null != (e = V(c.h, T.g.Qc)) ? e : 30);
        if (!(Math.floor(c.metadata.event_start_timestamp_ms / 1E3) > d.od + 60 * f))
            return a;
        var g = Xz(b);
        if (!g)
            return a;
        g.Qb = d.Qb + 1;
        var h;
        return null != (h = Yz(g.sessionId, g.Qb, g.vc, g.od, g.Yf, g.Ob, g.cd)) ? h : b
    }
      , bA = function(a, b) {
        var c = b.metadata.cookie_options
          , d = $z(b, c)
          , e = Aj(a, aA[0], c.domain, c.path)
          , f = {
            nb: T.g.U,
            domain: c.domain,
            path: c.path,
            expires: c.Bb ? new Date(Ua() + 1E3 * c.Bb) : void 0,
            flags: c.flags
        };
        U(52) && sj(d, void 0, f);
        return 1 !== sj(d, e, f)
    }
      , cA = function(a) {
        var b = a.metadata.cookie_options
          , c = $z(a, b)
          , d = zj(c, b.domain, b.path, aA, T.g.U);
        if (!d || !Vm && !U(52))
            return d;
        var e = jj(c, void 0, void 0, T.g.U);
        if (d && 1 < e.length) {
            R(114);
            for (var f = void 0, g = void 0, h = 0; h < e.length; h++) {
                var l = e[h].split(".");
                if (!(7 > l.length)) {
                    var n = Number(l[5]);
                    n && (!g || n > g) && (g = n,
                    f = e[h])
                }
            }
            f && !f.endsWith(d) && (R(115),
            U(52) && (d = f.split(".").slice(2).join(".")))
        }
        return d
    }
      , Yz = function(a, b, c, d, e, f, g) {
        if (a && b) {
            var h = [a, b, Pa(c), d, e];
            h.push(f ? "1" : "0");
            h.push(g || "0");
            return h.join(".")
        }
    }
      , aA = ["GS1"]
      , $z = function(a, b) {
        return b.prefix + "_ga_" + a.target.N[0]
    }
      , Xz = function(a) {
        if (a) {
            var b = a.split(".");
            if (!(5 > b.length || 7 < b.length)) {
                7 > b.length && R(67);
                var c = Number(b[1])
                  , d = Number(b[3])
                  , e = Number(b[4] || 0);
                c || R(118);
                d || R(119);
                isNaN(e) && R(120);
                if (!U(74) || c && d && !isNaN(e))
                    return {
                        sessionId: b[0],
                        Qb: c,
                        vc: !!Number(b[2]),
                        od: d,
                        Yf: e,
                        Ob: "1" === b[5],
                        cd: "0" !== b[6] ? b[6] : void 0
                    }
            }
        }
    }
      , dA = function(a) {
        return Yz(a.m[T.g.vb], a.m[T.g.ke], a.m[T.g.je], Math.floor(a.metadata.event_start_timestamp_ms / 1E3), a.metadata.join_timer_sec || 0, !!a.metadata[T.g.Ye], a.m[T.g.Mc])
    };
    var eA = function(a) {
        var b = V(a.h, T.g.ya)
          , c = a.h.B[T.g.ya];
        if (c === b)
            return c;
        var d = K(b);
        c && c[T.g.T] && (d[T.g.T] = (d[T.g.T] || []).concat(c[T.g.T]));
        return d
    }
      , fA = function(a, b) {
        var c = Uj(!0);
        return "1" !== c._up ? {} : {
            clientId: c[a],
            ni: c[b]
        }
    }
      , gA = function(a, b, c) {
        var d = Uj(!0)
          , e = d[b];
        e && (Sz(a, e, 2),
        Vz(e, a));
        var f = d[c];
        f && bA(f, a);
        return !(!e || !f)
    }
      , hA = !1
      , iA = function(a) {
        var b = eA(a) || {}
          , c = a.metadata.cookie_options
          , d = c.prefix + "_ga"
          , e = $z(a, c);
        dk(b[T.g.fc], !!b[T.g.T]) && gA(a, d, e) && (hA = !0);
        b[T.g.T] && ak(function() {
            var f = {}
              , g = Tz(a);
            g && (f[d] = g);
            var h = cA(a);
            h && (f[e] = h);
            var l = jj("FPLC", void 0, void 0, T.g.U);
            l.length && (f._fplc = l[0]);
            return f
        }, b[T.g.T], b[T.g.hc], !!b[T.g.Ib])
    }
      , kA = function(a) {
        if (!V(a.h, T.g.wb))
            return {};
        var b = a.metadata.cookie_options
          , c = b.prefix + "_ga"
          , d = $z(a, b);
        bk(function() {
            var e;
            if (rl("analytics_storage"))
                e = {};
            else {
                var f = {};
                e = (f._up = "1",
                f[c] = a.m[T.g.tb],
                f[d] = dA(a),
                f)
            }
            return e
        }, 1);
        return !rl("analytics_storage") && jA() ? fA(c, d) : {}
    }
      , jA = function() {
        var a = Xi(z.location, "host")
          , b = Xi($i(H.referrer), "host");
        return a && b ? a === b || 0 <= a.indexOf("." + b) || 0 <= b.indexOf("." + a) ? !0 : !1 : !1
    }
      , lA = function(a) {
        if (!a)
            return a;
        var b = String(a);
        b = Tj(b);
        return b = Tj(b, "_ga")
    };
    var mA = function() {
        var a = !0;
        Mm(7) && Mm(9) && Mm(10) || (a = !1);
        return a
    }
      , nA = function() {
        var a = !0;
        Mm(3) && Mm(4) || (a = !1);
        return a
    };
    var oA = function(a, b) {
        Ni() && (a.gcs = sl(),
        b.metadata.is_consent_update && (a.gcu = "1"),
        Bi().usedDeclare && (a.gcc = "G1" + ml(Li)))
    }
      , rA = function(a) {
        if (a.metadata.is_merchant_center)
            return "https://www.merchant-center-analytics.goog/mc/collect";
        var b = gs(V(a.h, T.g.ra), "/g/collect");
        if (b)
            return b;
        var c = ep(a, T.g.ib, V(a.h, T.g.ib));
        var d = V(a.h, T.g.sb);
        return c && !Bz(a) && !1 !== d && mA() && rl(T.g.I) && rl(T.g.U) ? pA() : qA()
    }
      , sA = !1;
    sA = !0;
    var tA = {};
    tA[T.g.tb] = "cid";
    tA[T.g.Ze] = "_fid";
    tA[T.g.Vg] = "_geo";
    tA[T.g.cc] = "gdid";
    tA[T.g.fe] = "ir";
    tA[T.g.Sa] = "ul";
    tA[T.g.Pc] = "_rdi";
    tA[T.g.Lb] = "sr";
    tA[T.g.kj] = "tid";
    tA[T.g.jf] = "tt";
    tA[T.g.uf] = "ec_mode";
    tA[T.g.Bh] = "gtm_up";
    tA[T.g.kf] = "uaa",
    tA[T.g.lf] = "uab",
    tA[T.g.nf] = "uafvl",
    tA[T.g.pf] = "uamb",
    tA[T.g.qf] = "uam",
    tA[T.g.rf] = "uap",
    tA[T.g.sf] = "uapv",
    tA[T.g.tf] = "uaw";
    var uA = {};
    uA[T.g.Nd] = "cc";
    uA[T.g.Od] = "ci";
    uA[T.g.Pd] = "cm";
    uA[T.g.Qd] = "cn";
    uA[T.g.Rd] = "cs";
    uA[T.g.Sd] = "ck";
    uA[T.g.qa] = "cu";
    uA[T.g.za] = "dl";
    uA[T.g.Ea] = "dr";
    uA[T.g.Jb] = "dt";
    uA[T.g.je] = "seg";
    uA[T.g.vb] = "sid";
    uA[T.g.ke] = "sct";
    uA[T.g.Aa] = "uid";
    U(80) && (uA[T.g.ic] = "dp");
    var vA = {};
    vA[T.g.Wd] = "_et";
    vA[T.g.bc] = "edid";
    var wA = {};
    wA[T.g.Nd] = "cc";
    wA[T.g.Od] = "ci";
    wA[T.g.Pd] = "cm";
    wA[T.g.Qd] = "cn";
    wA[T.g.Rd] = "cs";
    wA[T.g.Sd] = "ck";
    var xA = {}
      , yA = Object.freeze((xA[T.g.sa] = !0,
    xA))
      , qA = function() {
        var a = "www";
        sA && yk() && (a = yk());
        return "https://" + a + ".google-analytics.com/g/collect"
    }
      , pA = function() {
        var a;
        sA && "" !== yk() && (a = yk());
        return "https://" + (a ? a + "." : "") + "analytics.google.com/g/collect"
    }
      , zA = function(a, b, c) {
        var d = {}
          , e = {}
          , f = {};
        d.v = "2";
        d.tid = a.target.V;
        d.gtm = Zl();
        d._p = Qz();
        c && (d.em = c);
        a.metadata.create_google_join && (d._gaz = 1);
        oA(d, a);
        var g = a.m[T.g.cc];
        g && (d.gdid = g);
        e.en = uf(a.eventName, 40);
        a.metadata.is_first_visit && (e._fv = a.metadata.is_first_visit_conversion ? 2 : 1);
        a.metadata.is_new_to_site && (e._nsi = 1);
        a.metadata.is_session_start && (e._ss = a.metadata.is_session_start_conversion ? 2 : 1);
        a.metadata.is_conversion && (e._c = 1);
        a.metadata.is_external_event && (e._ee = 1);
        if (a.metadata.is_ecommerce) {
            var h = a.m[T.g.fa] || V(a.h, T.g.fa);
            if (Ia(h))
                for (var l = 0; l < h.length && 200 > l; l++)
                    e["pr" + (l + 1)] = Af(h[l])
        }
        var n = a.m[T.g.bc];
        n && (e.edid = n);
        var p = function(t, u) {
            if ("object" !== typeof u || !yA[t]) {
                t = uf(t, 40);
                var v = "ep." + t
                  , w = "epn." + t;
                t = Ha(u) ? w : v;
                var x = Ha(u) ? v : w;
                e.hasOwnProperty(x) && delete e[x];
                e[t] = uf(u, 100)
            }
        };
        m(a.m, function(t, u) {
            if (void 0 !== u && !uh.hasOwnProperty(t)) {
                null === u && (u = "");
                var v;
                t !== T.g.Mc ? v = !1 : a.metadata.euid_mode_enabled ? (d.ecid = u,
                v = !0) : v = void 0;
                if (!v && t !== T.g.Ye) {
                    var w = u;
                    !0 === u && (w = "1");
                    !1 === u && (w = "0");
                    var x;
                    if (tA[t])
                        x = tA[t],
                        d[x] = uf(w, 420);
                    else if (uA[t])
                        x = uA[t],
                        f[x] = uf(w, "dl" === x && U(81) ? 1E3 : 420);
                    else if (vA[t])
                        x = vA[t],
                        e[x] = uf(w, 420);
                    else if ("_" === t.charAt(0))
                        d[t] = uf(w, 420);
                    else {
                        var y;
                        wA[t] ? y = !0 : t !== T.g.Hc ? y = !1 : ("object" !== typeof u && p(t, u),
                        y = !0);
                        y || p(t, u)
                    }
                }
            }
        });
        (function(t) {
            Dz(a) && "object" === typeof t && m(t || {}, function(u, v) {
                "object" !== typeof v && (d["sst." + u] = uf(v, 420))
            })
        }
        )(a.m[T.g.Yc]);
        var q = a.m[T.g.Ma] || {};
        !1 !== V(a.h, T.g.aa) && nA() || (q._npa = "1");
        U(28) && !1 === V(a.h, T.g.sb) && (d.ngs = "1");
        m(q, function(t, u) {
            if (void 0 !== u)
                if (null === u && (u = ""),
                t === T.g.Aa && !f.uid)
                    f.uid = uf(u, 36);
                else if (b[t] !== u) {
                    var v = (Ha(u) ? "upn." : "up.") + uf(t, 24);
                    e[v] = uf(u, 36);
                    b[t] = u
                }
        });
        var r = !1;
        return Cf.call(this, {
            Ba: d,
            Rb: f,
            Nf: e
        }, rA(a), Dz(a), r) || this
    };
    pa(zA, Cf);
    var AA = function() {
        var a = Ua()
          , b = a + 864E5
          , c = 20
          , d = 5E3;
        return function() {
            var e = Ua();
            e >= b && (b = e + 864E5,
            d = 5E3);
            if (1 > d)
                return !1;
            c = Math.min(c + (e - a) / 1E3 * 5, 20);
            a = e;
            if (1 > c)
                return !1;
            d--;
            c--;
            return !0
        }
    };
    var BA = function(a, b) {
        return a.replace(/\$\{([^\}]+)\}/g, function(c, d) {
            return b[d] || c
        })
    }
      , CA = function(a) {
        var b = a.search;
        return a.protocol + "//" + a.hostname + a.pathname + (b ? b + "&richsstsse" : "?richsstsse")
    }
      , DA = function(a) {
        var b = {}
          , c = ""
          , d = a.pathname.indexOf("/g/collect");
        0 <= d && (c = a.pathname.substring(0, d));
        b.transport_url = a.protocol + "//" + a.hostname + c;
        return b
    }
      , EA = function(a, b) {
        var c = new z.XMLHttpRequest;
        c.withCredentials = !0;
        var d = b ? "POST" : "GET"
          , e = ""
          , f = 0
          , g = $i(a)
          , h = DA(g)
          , l = CA(g);
        c.onprogress = function(n) {
            if (200 === c.status) {
                e += c.responseText.substring(f);
                f = n.loaded;
                for (var p = BA(e, h), q = p.indexOf("\n\n"); -1 !== q; ) {
                    var r;
                    a: {
                        var t;
                        var u = p.substring(0, q).split("\n")
                          , v = "undefined" != typeof Symbol && Symbol.iterator && u[Symbol.iterator];
                        if (v)
                            t = v.call(u);
                        else if ("number" == typeof u.length)
                            t = {
                                next: da(u)
                            };
                        else
                            throw Error(String(u) + " is not an iterable or ArrayLike");
                        var w = t.next().value
                          , x = t.next().value;
                        if (w.startsWith("event: message") && x.startsWith("data: "))
                            try {
                                r = JSON.parse(x.substring(x.indexOf(":") + 1));
                                break a
                            } catch (I) {}
                        r = void 0
                    }
                    var y = r;
                    if (y) {
                        var A = y.send_pixel || [];
                        if (Array.isArray(A))
                            for (var B = 0; B < A.length; B++)
                                pc(A[B]);
                        if (U(66)) {
                            var C = y.send_beacon || [];
                            if (Array.isArray(C))
                                for (var D = 0; D < C.length; D++)
                                    wc(C[D])
                        }
                    }
                    p = p.substring(q + 2);
                    q = p.indexOf("\n\n")
                }
                e = p
            }
        }
        ;
        c.open(d, l);
        c.send(b)
    };
    var HA = function(a, b, c, d) {
        var e = a + "?" + b;
        FA && (d = !(0 === e.indexOf(qA()) || 0 === e.indexOf(pA())));
        d && !Hz ? EA(e, c) : GA(a, b, c)
    }
      , IA = function(a) {}
      , JA = function(a, b) {
        function c(t) {
            q.push(t + "=" + encodeURIComponent("" + a.Ba[t]))
        }
        var d = b.Xk
          , e = b.Yk
          , f = b.gk
          , g = b.Fj
          , h = b.Ej
          , l = b.nk
          , n = b.Zk
          , p = b.mk;
        if (d || e || n) {
            var q = [];
            c("tid");
            c("cid");
            c("gtm");
            q.push("aip=1");
            a.Rb.uid && !p && q.push("uid=" + encodeURIComponent("" + a.Rb.uid));
            d && (GA("https://stats.g.doubleclick.net/g/collect", "v=2&" + q.join("&")),
            ll("https://stats.g.doubleclick.net/g/collect?v=2&" + q.join("&")));
            if (e) {
                q.push("z=" + La());
                if (!l) {
                    var r = f && 0 === f.indexOf("google.") && "google.com" != f ? "https://www.%/ads/ga-audiences?v=1&t=sr&slf_rd=1&_r=4&".replace("%", f) : void 0;
                    r && pc(r + q.join("&"))
                }
                U(28) && g && h && Yp() && function() {
                    var t = $p() + "/td/ga/rul?";
                    q = [];
                    c("tid");
                    q.push("gacid=" + encodeURIComponent(String(a.Ba.cid)));
                    c("gtm");
                    q.push("aip=1");
                    q.push("fledge=1");
                    q.push("z=" + La());
                    Zp(t + q.join("&"), a.Ba.tid)
                }()
            }
            n && IA(a)
        }
    }
      , FA = !1;
    var KA = function() {
        this.D = 1;
        this.K = {};
        this.h = new Df;
        this.m = -1
    };
    KA.prototype.B = function(a, b) {
        var c = this
          , d = new zA(a,this.K,b)
          , e = Iz(a);
        e && this.h.D(d) || this.flush();
        if (e && this.h.add(d)) {
            if (0 > this.m) {
                var f = z.setTimeout, g;
                Dz(a) ? LA ? (LA = !1,
                g = MA) : g = NA : g = 5E3;
                this.m = f.call(z, function() {
                    return c.flush()
                }, g)
            }
        } else {
            var h = Ff(d, this.D++);
            HA(d.h, h.ig, h.body, d.D);
            var l = a.metadata.create_dc_join
              , n = a.metadata.create_google_join
              , p = !1 !== V(a.h, T.g.Da)
              , q = !1 !== V(a.h, T.g.aa)
              , r = {
                eventId: a.h.eventId,
                priorityId: a.h.priorityId
            }
              , t = {
                Xk: l,
                Yk: n,
                gk: Cz(a),
                Fj: p,
                Ej: q,
                nk: Bz(a),
                mk: a.metadata.euid_mode_enabled,
                Jl: r
            };
            JA(d, t)
        }
        Cr(a)
    }
    ;
    KA.prototype.add = function(a) {
        a.metadata.euid_mode_enabled && !Hz ? this.R(a) : this.B(a)
    }
    ;
    KA.prototype.flush = function() {
        if (this.h.events.length) {
            var a = Gf(this.h, this.D++);
            HA(this.h.h, a.ig, a.body, this.h.m);
            this.h = new Df;
            0 <= this.m && (z.clearTimeout(this.m),
            this.m = -1)
        }
    }
    ;
    KA.prototype.R = function(a) {
        var b = this
          , c = Ez(a);
        c ? rh(c, function(d) {
            b.B(a, 1 === d.split("~").length ? void 0 : d)
        }) : this.B(a)
    }
    ;
    var GA = function(a, b, c) {
        var d = a + "?" + b;
        if (c)
            try {
                fc.sendBeacon && fc.sendBeacon(d, c)
            } catch (e) {
                wb("TAGGING", 15)
            }
        else
            wc(d)
    }
      , MA = $l('', 500)
      , NA = $l('', 5E3)
      , LA = !0;
    var OA = window
      , PA = document
      , QA = function(a) {
        var b = OA._gaUserPrefs;
        if (b && b.ioo && b.ioo() || a && !0 === OA["ga-disable-" + a])
            return !0;
        try {
            var c = OA.external;
            if (c && c._gaUserPrefs && "oo" == c._gaUserPrefs)
                return !0
        } catch (f) {}
        for (var d = dj("AMP_TOKEN", String(PA.cookie), !0), e = 0; e < d.length; e++)
            if ("$OPT_OUT" == d[e])
                return !0;
        return PA.getElementById("__gaOptOutExtension") ? !0 : !1
    };
    var RA = function(a, b, c) {
        c || (c = function() {}
        );
        void 0 !== a.m[b] && (a.m[b] = c(a.m[b]))
    }
      , SA = function(a, b) {
        var c = T.g.I;
        rl(c) || ul(function() {
            b.metadata.is_consent_update = !0;
            var d = Eh[c || ""];
            d && Gz(b, "gcut", d);
            a.Oh(b)
        }, c)
    }
      , TA = function(a, b, c) {
        void 0 === c && (c = {});
        if ("object" === typeof b)
            for (var d in b)
                TA(a + "." + d, b[d], c);
        else
            c[a] = b;
        return c
    }
      , UA = !1;
    var co = {
        Sj: "",
        pl: Number("")
    }
      , VA = {}
      , WA = (VA[T.g.Nd] = !0,
    VA[T.g.Od] = !0,
    VA[T.g.Pd] = !0,
    VA[T.g.Qd] = !0,
    VA[T.g.Rd] = !0,
    VA[T.g.Sd] = !0,
    VA)
      , XA = function(a) {
        this.R = a;
        this.ab = new KA;
        this.h = void 0;
        this.D = new Oz;
        this.m = this.B = void 0;
        this.K = !1;
        this.Uc = void 0;
        this.Bc = !1
    };
    ca = XA.prototype;
    ca.Kk = function(a, b, c) {
        var d = this
          , e = Po(this.R);
        if (e)
            if (c.eventMetadata.is_external_event && "_" === a.charAt(0))
                c.W();
            else {
                a !== T.g.wa && a !== T.g.Ia && Lz(a) && R(58);
                YA(c.h);
                var f = new dp(e,a,c);
                f.metadata.event_start_timestamp_ms = b;
                var g = [T.g.U];
                (ep(f, T.g.ib, V(f.h, T.g.ib)) || Dz(f)) && g.push(T.g.I);
                var h = function() {
                    vl(function() {
                        d.Lk(f)
                    }, g)
                };
                U(11) && U(25) ? eo(h) : h()
            }
        else
            c.W()
    }
    ;
    ca.Lk = function(a) {
        this.m = a;
        try {
            QA(a.target.V) && (R(28),
            a.J = !0);
            if (0 <= co.Sj.replace(/\s+/g, "").split(",").indexOf(a.eventName))
                a.J = !0;
            else {
                var b = Fz(a);
                b && b.blacklisted && (a.J = !0)
            }
            var c = H.location.protocol;
            "http:" != c && "https:" != c && (R(29),
            a.J = !0);
            fc && "preview" == fc.loadPurpose && (R(30),
            a.J = !0);
            var d = Ih.grl;
            d || (d = AA(),
            Ih.grl = d);
            d() || (R(35),
            a.J = !0);
            if (a.J) {
                a.h.W();
                xb();
                return
            }
            var e = {
                prefix: String(V(a.h, T.g.Ra, "")),
                path: String(V(a.h, T.g.Td, "/")),
                flags: String(V(a.h, T.g.fb, "")),
                domain: String(V(a.h, T.g.eb, "auto")),
                Bb: Number(V(a.h, T.g.Ka, 63072E3))
            };
            a.metadata.cookie_options = e;
            ZA(a);
            this.qj(a);
            this.D.ml(a);
            a.metadata.is_merchant_center ? a.metadata.euid_mode_enabled = !1 : V(a.h, T.g.ef) ? a.metadata.euid_mode_enabled = !1 : ep(a, "ccd_add_1p_data", !1) ? a.metadata.euid_mode_enabled = !0 : a.metadata.euid_mode_enabled = U(16) ? !1 : fl(dl(a.h));
            if (a.metadata.euid_mode_enabled) {
                var f = dl(a.h);
                if (fl(f)) {
                    var g = V(a.h, T.g.sa);
                    if (ep(a, "ccd_add_1p_data", !1))
                        null === g ? a.metadata.user_data_from_code = null : (f.enable_code && Qc(g) && (a.metadata.user_data_from_code = g),
                        Qc(f.selectors) && !a.metadata.user_data_from_manual && (a.metadata.user_data_from_manual = cl(f.selectors)));
                    else if (void 0 !== g)
                        a.metadata.user_data = g,
                        a.m._udm = "c";
                    else {
                        var h = gl(f);
                        a.metadata.user_data = h;
                        if ("selectors" === f.mode || Qc(f.selectors))
                            a.m._udm = "s";
                        else if ("auto_detect" === f.mode || Qc(f.auto_detect))
                            a.m._udm = "a"
                    }
                }
            }
            var l = this.ii, n;
            V(a.h, T.g.wb) && (rl(T.g.U) || V(a.h, T.g.tb) || (a.m[T.g.Bh] = !0));
            var p;
            var q;
            q = void 0 === q ? 3 : q;
            var r = z.location.href;
            if (r) {
                var t = $i(r).search.replace("?", "")
                  , u = Vi(t, "_gl", !1, !0) || "";
                p = u ? void 0 !== Vj(u, q) : !1
            } else
                p = !1;
            p && Dz(a) && Gz(a, "glv", 1);
            a.eventName === T.g.wa ? (V(a.h, T.g.wb) && Eo(["aw", "dc"]),
            iA(a),
            n = kA(a)) : n = {};
            l.call(this, n);
            a.eventName == T.g.wa && (V(a.h, T.g.La, !0) ? (a.h.h[T.g.ca] && (a.h.m[T.g.ca] = a.h.h[T.g.ca],
            a.h.h[T.g.ca] = void 0,
            a.m[T.g.ca] = void 0),
            a.eventName = T.g.Gc) : a.J = !0);
            var v = eb(Dp(a.h, T.g.ca, 1), ".");
            v && (a.m[T.g.cc] = v);
            var w = eb(Dp(a.h, T.g.ca, 2), ".");
            w && (a.m[T.g.bc] = w);
            var x = this.B
              , y = this.D
              , A = !this.Bc
              , B = this.h
              , C = V(a.h, T.g.tb)
              , D = C ? 1 : 8;
            a.metadata.is_new_to_site = !1;
            C || (C = Tz(a),
            D = 3);
            C || (C = B,
            D = 5);
            if (!C) {
                var I = rl(T.g.U)
                  , G = Pz();
                C = !G.from_cookie || I ? G.vid : void 0;
                D = 6
            }
            C ? C = "" + C : (C = wj(),
            D = 7,
            a.metadata.is_first_visit = a.metadata.is_new_to_site = !0);
            Sz(a, C, D);
            var O = Math.floor(a.metadata.event_start_timestamp_ms / 1E3)
              , Q = void 0;
            a.metadata.is_new_to_site || (Q = cA(a) || x);
            var aa = Pa(V(a.h, T.g.Qc, 30));
            aa = Math.min(475, aa);
            aa = Math.max(5, aa);
            var oa = Pa(V(a.h, T.g.ff, 1E4))
              , P = Xz(Q);
            a.metadata.is_first_visit = !1;
            a.metadata.is_session_start = !1;
            a.metadata.join_timer_sec = 0;
            P && P.Yf && (a.metadata.join_timer_sec = Math.max(0, P.Yf - Math.max(0, O - P.od)));
            var S = !1;
            P || (S = a.metadata.is_first_visit = !0,
            P = {
                sessionId: String(O),
                Qb: 1,
                vc: !1,
                od: O,
                Ob: !1,
                cd: void 0
            });
            O > P.od + 60 * aa && (S = !0,
            P.sessionId = String(O),
            P.Qb++,
            P.vc = !1,
            P.cd = void 0);
            if (S)
                a.metadata.is_session_start = !0,
                y.hk(a);
            else if (y.ek() > oa || a.eventName == T.g.Gc)
                P.vc = !0;
            a.metadata.euid_mode_enabled ? V(a.h, T.g.Aa) ? P.Ob = !0 : (P.Ob && (P.cd = void 0),
            P.Ob = !1) : P.Ob = !1;
            var ka = P.cd;
            if (a.metadata.euid_mode_enabled) {
                var fa = V(a.h, T.g.Mc)
                  , ba = fa ? 1 : 8;
                fa || (fa = ka,
                ba = 4);
                fa || (fa = vj(),
                ba = 7);
                var Fa = ba
                  , Va = a.metadata.enhanced_client_id_source;
                if (void 0 === Va || Fa <= Va)
                    a.m[T.g.Mc] = fa.toString(),
                    a.metadata.enhanced_client_id_source = Fa
            }
            A ? (a.copyToHitData(T.g.vb, P.sessionId),
            a.copyToHitData(T.g.ke, P.Qb),
            a.copyToHitData(T.g.je, P.vc ? 1 : 0)) : (a.m[T.g.vb] = P.sessionId,
            a.m[T.g.ke] = P.Qb,
            a.m[T.g.je] = P.vc ? 1 : 0);
            a.metadata[T.g.Ye] = P.Ob ? 1 : 0;
            $A(a);
            var Ga = ""
              , Ja = H.location;
            if (Ja) {
                var bb = Ja.pathname || "";
                "/" != bb.charAt(0) && (bb = "/" + bb);
                Ga = Ja.protocol + "//" + Ja.hostname + bb + Ja.search
            }
            a.copyToHitData(T.g.za, Ga);
            var Nd = a.copyToHitData, Od = T.g.Ea, od;
            a: {
                var it = jj("_opt_expid", void 0, void 0, T.g.U)[0];
                if (it) {
                    var jt = decodeURIComponent(it).split("$");
                    if (3 === jt.length) {
                        od = jt[2];
                        break a
                    }
                }
                if (void 0 !== Ih.ga4_referrer_override)
                    od = Ih.ga4_referrer_override;
                else {
                    var kt = oi("gtm.gtagReferrer." + a.target.V);
                    od = kt ? "" + kt : H.referrer
                }
            }
            Nd.call(a, Od, od || void 0);
            a.copyToHitData(T.g.Jb, H.title);
            a.copyToHitData(T.g.Sa, (fc.language || "").toLowerCase());
            var lt = Ek();
            a.copyToHitData(T.g.Lb, lt.width + "x" + lt.height);
            U(80) && a.copyToHitData(T.g.ic);
            a.metadata.create_dc_join = !1;
            a.metadata.create_google_join = !1;
            if (!(U(66) && Dz(a) || a.metadata.is_merchant_center || !1 === V(a.h, T.g.sb)) && mA() && rl(T.g.I)) {
                var Sh = ep(a, T.g.ib, V(a.h, T.g.ib));
                if (a.metadata.is_session_start || V(a.h, T.g.bf)) {
                    a.metadata.create_dc_join = !!Sh;
                }
                var mt;
                mt = a.metadata.join_timer_sec;
                Sh && 0 === (mt || 0) && (a.metadata.join_timer_sec = 60,
                a.metadata.create_google_join = !0)
            }
            aB(a);
            yh.hasOwnProperty(a.eventName) && (a.metadata.is_ecommerce = !0,
            a.copyToHitData(T.g.fa),
            a.copyToHitData(T.g.qa));
            a.copyToHitData(T.g.jf);
            for (var nt = V(a.h, T.g.cf) || [], Dl = 0; Dl < nt.length; Dl++) {
                var ot = nt[Dl];
                if (ot.rule_result) {
                    a.copyToHitData(T.g.jf, ot.traffic_type);
                    Jz(3);
                    break
                }
            }
            if (!a.metadata.is_merchant_center && V(a.h, T.g.ra)) {
                var pt = eA(a) || {}
                  , PD = (dk(pt[T.g.fc], !!pt[T.g.T]) ? Uj(!0)._fplc : void 0) || (0 < jj("FPLC", void 0, void 0, T.g.U).length ? void 0 : "0");
                a.m._fplc = PD
            }
            if (void 0 !== V(a.h, T.g.fe))
                a.copyToHitData(T.g.fe);
            else {
                var qt = V(a.h, T.g.ie), El, Th;
                a: {
                    if (hA) {
                        var Fl = eA(a) || {};
                        if (Fl && Fl[T.g.T])
                            for (var rt = Yi($i(a.m[T.g.Ea]), "host", !0), Uh = Fl[T.g.T], Rf = 0; Rf < Uh.length; Rf++)
                                if (Uh[Rf]instanceof RegExp) {
                                    if (Uh[Rf].test(rt)) {
                                        Th = !0;
                                        break a
                                    }
                                } else if (0 <= rt.indexOf(Uh[Rf])) {
                                    Th = !0;
                                    break a
                                }
                    }
                    Th = !1
                }
                if (!(El = Th)) {
                    var Vh;
                    if (Vh = qt)
                        a: {
                            for (var st = qt.include_conditions || [], QD = Yi($i(a.m[T.g.Ea]), "host", !0), Gl = 0; Gl < st.length; Gl++)
                                if (st[Gl].test(QD)) {
                                    Vh = !0;
                                    break a
                                }
                            Vh = !1
                        }
                    El = Vh
                }
                El && (a.m[T.g.fe] = "1",
                Jz(4))
            }
            Dz(a) && (!U(87) && hs() || Gz(a, "uc", wk()),
            Ni() && Gz(a, "rnd", wl()));
            if (U(66) && Dz(a)) {
                ep(a, T.g.ib, !1) && Gz(a, "gse", 1);
                !1 === V(a.h, T.g.sb) && Gz(a, "ngs", 1);
                Bz(a) && Gz(a, "ga_rd", 1);
                mA() || Gz(a, "ngst", 1);
                var tt = Cz(a);
                tt && Gz(a, "etld", tt)
            }
            if (U(94) && Dz(a)) {
                var ut = sA ? yk() : "";
                ut && Gz(a, "gcsub", ut)
            }
            Dz(a) && Ni() && (Oi() && Gz(a, "gcd", "G1" + ml(Ki)),
            V(a.h, T.g.ma) && Gz(a, "adr", 1));
            if (Dz(a)) {
                var vt = nq();
                vt && Gz(a, "us_privacy", vt);
                var wt = Lm();
                wt && Gz(a, "gdpr", wt);
                var xt = Km();
                xt && Gz(a, "gdpr_consent", xt)
            }
            a: if (U(11))
                if (!Zn(z))
                    R(87);
                else if (void 0 !== ao) {
                    R(85);
                    var zt = Xn();
                    if (zt) {
                        if (U(59)) {
                            if (V(a.h, T.g.Pc) && !Dz(a))
                                break a
                        } else if (V(a.h, T.g.Pc))
                            break a;
                        fo(zt, a)
                    } else
                        R(86)
                }
            U(61) && V(a.h, T.g.he) && Jz(12);
            if (U(78)) {
                var Hl = Wp(Vp());
                Hl || bB || (bB = !0,
                mm(),
                Hl = Wp(Vp()));
                Hl && (a.m[T.g.Jc] = "1")
            }
            if (a.eventName == T.g.Ia) {
                var Bt = V(a.h, T.g.hb)
                  , RD = V(a.h, T.g.ub)
                  , Ct = void 0;
                Ct = a.m[Bt];
                RD(Ct || V(a.h, Bt));
                a.J = !0
            }
            if (!U(26) && !a.h.eventMetadata.syn_or_mod) {
                var Il = V(a.h, T.g.Ve);
                if (Il) {
                    var Pd = K(a.h.h);
                    K(a.m, Pd);
                    for (var Dt = Il.edit_rules || [], Et = !1, Jl = 0; Jl < Dt.length; Jl++) {
                        var Wh;
                        a: {
                            var Xh = a
                              , Qd = Dt[Jl];
                            if (hz(Xh.eventName, Pd, Qd.event_name_predicate, Qd.conditions || [])) {
                                if (Qd.new_event_name) {
                                    var Ft = k(Qd.new_event_name) ? String(Qd.new_event_name) : dz(Xh.eventName, Pd, Qd.new_event_name);
                                    if (Lz(Ft)) {
                                        Wh = !1;
                                        break a
                                    }
                                    Xh.eventName = String(Ft)
                                }
                                Mz(Xh.eventName, Pd, Qd);
                                Jz(2);
                                Wh = !0
                            } else
                                Wh = !1
                        }
                        Wh && (Et = !0)
                    }
                    for (var Gt = Il.synthesis_rules || [], Kl = 0; Kl < Gt.length; Kl++) {
                        var Ll = a
                          , Sf = Gt[Kl];
                        if (hz(Ll.eventName, Pd, Sf.event_name_predicate, Sf.conditions || [])) {
                            var Ml = Sf.new_event_name;
                            if (!Lz(Ml)) {
                                var Ht = Sf.merge_source_event_params ? K(Pd) : {};
                                Mz(Ml, Ht, Sf);
                                var It = {}
                                  , Nl = {
                                    eventMetadata: (It.syn_or_mod = !0,
                                    It)
                                };
                                Nl.eventMetadata.event_usage = [11];
                                ez && Nl.eventMetadata.event_usage.push(10);
                                var SD = At(Ll.target.V, Ml, Ht);
                                Qt(SD, Ll.h.eventId, Nl);
                                Jz(1)
                            }
                        }
                    }
                    if (Et) {
                        for (var Ol = {}, Jt = {
                            eventMetadata: (Ol.syn_or_mod = !0,
                            Ol.is_external_event = !!a.h.eventMetadata.is_external_event,
                            Ol)
                        }, Kt, Pl = [], Lt = vb.GA4_EVENT || [], Yh = 0; Yh < Lt.length; Yh++)
                            Lt[Yh] && Pl.push(Yh);
                        (Kt = 0 < Pl.length ? Pl : void 0) && (Jt.eventMetadata.event_usage = Kt);
                        var TD = At(a.target.V, a.eventName, Pd);
                        Qt(TD, a.h.eventId, Jt);
                        a.J = !0
                    }
                }
            }
            a.copyToHitData(T.g.Aa);
            a.copyToHitData(T.g.Ma);
            hp(a);
            cB(a);
            a.metadata.em_event && Jz(14);
            var Ql = a.metadata.event_usage;
            if (Ia(Ql))
                for (var Rl = 0; Rl < Ql.length; Rl++)
                    Jz(Ql[Rl]);
            var Mt = yb("GA4_EVENT");
            Mt && (a.m._eu = Mt);
            if (a.metadata.speculative || a.J) {
                a.h.W();
                xb();
                return
            }
            var VD = this.ii, Nt, WD = this.h, Sl;
            a: {
                var Tl = dA(a);
                if (Tl) {
                    if (bA(Tl, a)) {
                        Sl = Tl;
                        break a
                    }
                    R(25);
                    a.J = !0
                }
                Sl = void 0
            }
            var XD = Sl;
            Nt = {
                clientId: Wz(a, WD),
                ni: XD
            };
            VD.call(this, Nt);
            this.Bc = !0;
            this.il(a);
            if (Dz(a)) {
                var YD = a.metadata.is_conversion;
                ("page_view" === a.eventName || YD) && SA(this, a)
            }
            this.D.og();
            this.Uc = dB(a, this.Uc);
            a.copyToHitData(T.g.Vg);
            V(a.h, T.g.Pc) && (a.m[T.g.Pc] = !0,
            U(75) && Dz(a) || RA(a, T.g.Lb));
            if (a.J) {
                a.h.W();
                xb();
                return
            }
            this.Oh(a);
            a.h.X()
        } catch ($E) {
            a.h.W()
        }
        xb()
    }
    ;
    ca.Oh = function(a) {
        this.ab.add(a)
    }
    ;
    ca.ii = function(a) {
        var b = a.clientId
          , c = a.ni;
        b && c && (this.h = b,
        this.B = c)
    }
    ;
    ca.flush = function() {
        this.ab.flush()
    }
    ;
    ca.il = function(a) {
        var b = this;
        if (!this.K) {
            var c = rl(T.g.U);
            tl([T.g.U], function() {
                var d = rl(T.g.U);
                if (c ^ d && b.m && b.B && b.h) {
                    var e = b.h;
                    if (d) {
                        var f = Tz(b.m);
                        if (f) {
                            b.h = f;
                            var g = cA(b.m);
                            g && (b.B = Zz(g, b.B, b.m))
                        } else
                            Vz(b.h, b.m),
                            Rz(b.h, !0);
                        bA(b.B, b.m);
                        var h = {};
                        h[T.g.bf] = e;
                        var l = At(b.R, T.g.Se, h);
                        Qt(l, a.h.eventId, {});
                    } else {
                        b.B = void 0;
                        b.h = void 0;
                        z.gaGlobal = {};
                    }
                    c = d
                }
            });
            this.K = !0
        }
    }
    ;
    ca.qj = function(a) {
        a.eventName !== T.g.Ia && this.D.pj(a)
    }
    ;
    var cB = function(a) {
        if (Dz(a)) {
            var b = function(d) {
                var e = TA(T.g.sa, d);
                m(e, function(f, g) {
                    a.m[f] = g
                })
            }
              , c = V(a.h, T.g.sa);
            void 0 !== c ? b(c) : b(a.metadata.user_data);
            a.metadata.user_data = void 0
        }
    }
      , ZA = function(a) {
        function b(c, d) {
            uh[c] || void 0 === d || (a.m[c] = d)
        }
        m(a.h.m, b);
        m(a.h.h, b)
    }
      , $A = function(a) {
        var b = Ep(a.h)
          , c = function(d, e) {
            WA[d] && (a.m[d] = e)
        };
        Qc(b[T.g.Hc]) ? m(b[T.g.Hc], function(d, e) {
            c((T.g.Hc + "_" + d).toLowerCase(), e)
        }) : m(b, c)
    }
      , aB = function(a) {
        var b = function(c) {
            return !!c && c.conversion
        };
        a.metadata.is_conversion = b(Fz(a));
        a.metadata.is_first_visit && (a.metadata.is_first_visit_conversion = b(Fz(a, "first_visit")));
        a.metadata.is_session_start && (a.metadata.is_session_start_conversion = b(Fz(a, "session_start")))
    }
      , dB = function(a, b) {
        var c = void 0;
        return c
    }
      , bB = !1;
    function YA(a) {
        m(a, function(c) {
            "_" === c.charAt(0) && delete a[c]
        });
        var b = a[T.g.Ma] || {};
        m(b, function(c) {
            "_" === c.charAt(0) && delete b[c]
        })
    }
    ;var eB = function(a) {
        if ("prerender" == H.visibilityState)
            return !1;
        a();
        return !0
    }
      , fB = function(a) {
        if (!eB(a)) {
            var b = !1
              , c = function() {
                !b && eB(a) && (b = !0,
                rc(H, "visibilitychange", c),
                R(55))
            };
            qc(H, "visibilitychange", c);
            R(54)
        }
    };
    var hB = function(a, b) {
        fB(function() {
            var c = Po(a);
            if (c) {
                var d = gB(c, b);
                nu.register(a, d)
            }
        });
    };
    function gB(a, b) {
        var c = function() {};
        var d = new XA(a.id)
          , e = "MC" === a.prefix;
        c = function(f, g, h, l) {
            e && (l.eventMetadata.is_merchant_center = !0);
            d.Kk(g, h, l)
        }
        ;
        iB(a, d, b);
        return c
    }
    function iB(a, b, c) {
        var d = b.D
          , e = {}
          , f = {
            eventId: c,
            eventMetadata: (e.batch_on_navigation = !0,
            e)
        };
        d.Qk(function() {
            Hz = !0;
            nu.flush();
            1E3 <= d.Ae() && fc.sendBeacon && ou(T.g.Se, {}, a.id, f);
            b.flush();
            d.ji(function() {
                Hz = !1;
                d.ji()
            })
        });
    }
    ;var FC = gB;
    function HC(a, b, c) {}
    HC.M = "internal.gtagConfig";
    function JC(a, b) {}
    JC.O = "gtagSet";
    function KC(a, b) {}
    KC.O = "injectHiddenIframe";
    var LC = {};
    function NC(a, b, c, d) {}
    var OC = Object.freeze({
        dl: 1,
        id: 1
    })
      , PC = {};
    function QC(a, b, c, d) {}
    NC.O = "injectScript";
    QC.M = "internal.injectScript";
    function RC(a) {
        var b = !0;
        return b
    }
    RC.O = "isConsentGranted";
    var SC = function() {
        var a = Eg(function(b) {
            this.h.h.log("error", b)
        });
        a.O = "JSON";
        return a
    };
    var TC = function() {
        return !1
    }
      , UC = {
        getItem: function(a) {
            var b = null;
            return b
        },
        setItem: function(a, b) {
            return !1
        },
        removeItem: function(a) {}
    };
    var VC = ["textContent", "value", "tagName", "children", "childElementCount"];
    function WC(a) {
        var b;
        return b
    }
    WC.M = "internal.locateUserData";
    function YC() {}
    YC.O = "logToConsole";
    function ZC(a) {
        var b = void 0;
        if ("function" === typeof URL) {
            var c;
            a: {
                var d;
                try {
                    d = new URL(a)
                } catch (w) {
                    c = void 0;
                    break a
                }
                for (var e = {}, f = Array.from(d.searchParams), g = 0; g < f.length; g++) {
                    var h = f[g][0]
                      , l = f[g][1];
                    e.hasOwnProperty(h) ? "string" === typeof e[h] ? e[h] = [e[h], l] : e[h].push(l) : e[h] = l
                }
                c = Rc({
                    href: d.href,
                    origin: d.origin,
                    protocol: d.protocol,
                    username: d.username,
                    password: d.password,
                    host: d.host,
                    hostname: d.hostname,
                    port: d.port,
                    pathname: d.pathname,
                    search: d.search,
                    searchParams: e,
                    hash: d.hash
                })
            }
            return c
        }
        var n;
        try {
            n = $i(a)
        } catch (w) {
            return
        }
        if (!n.protocol || !n.host)
            return;
        var p = {};
        if (n.search)
            for (var q = n.search.replace("?", "").split("&"), r = 0; r < q.length; r++) {
                var t = q[r].split("=")
                  , u = t[0]
                  , v = decodeURIComponent(t.splice(1).join("="));
                p.hasOwnProperty(u) ? "string" === typeof p[u] ? p[u] = [p[u], v] : p[u].push(v) : p[u] = v
            }
        n.searchParams = p;
        n.origin = n.protocol + "//" + n.host;
        n.username = "";
        n.password = "";
        b = Rc(n);
        return b
    }
    ZC.O = "parseUrl";
    function $C(a) {}
    $C.M = "internal.processAsNewEvent";
    function aD(a, b) {
        var c = !1;
        return c
    }
    aD.O = "queryPermission";
    function bD() {
        var a = "";
        return a
    }
    bD.O = "readCharacterSet";
    function cD() {
        var a = "";
        return a
    }
    cD.O = "readTitle";
    function dD(a, b) {
        var c = this;
        M(F(this), ["destinationId:!string", "callback:!Fn"], arguments),
        ip(a, function(d) {
            b.h(c.h, Rc(d, c.h, 1))
        });
    }
    dD.M = "internal.registerCcdCallback";
    var eD = Object.freeze(["config", "event", "get", "set"]);
    function fD(a, b, c) {}
    fD.M = "internal.registerGtagCommandListener";
    function gD(a, b) {
        var c = !1;
        return c
    }
    gD.M = "internal.removeDataLayerEventListener";
    function hD() {}
    hD.O = "resetDataLayer";
    function iD(a, b, c, d) {
        M(F(this), ["destinationIds:!*", "eventName:!*", "eventParameters:?DustMap", "messageContext:?DustMap"], arguments);
        var e = c ? Sc(c) : {}
          , f = Sc(a);
        Array.isArray(f) || (f = [f]);
        b = String(b);
        var g = d ? Sc(d) : {}
          , h = this.h.h;
        g.originatingEntity = Sx(h);
        for (var l = 0; l < f.length; l++) {
            var n = f[l];
            if ("string" === typeof n) {
                var p = K(e)
                  , q = K(g)
                  , r = At(n, b, p);
                Qt(r, g.eventId || h.eventId, q)
            }
        }
    }
    iD.M = "internal.sendGtagEvent";
    function jD(a, b, c) {}
    jD.O = "sendPixel";
    function kD(a, b, c, d) {
        var e = this;
        d = void 0 === d ? !0 : d;
        var f = !1;
        return f
    }
    kD.O = "setCookie";
    function lD(a) {
        M(F(this), ["consentSettings:!DustMap"], arguments);
        for (var b = a.xb(), c = b.length(), d = 0; d < c; d++) {
            var e = b.get(d);
            e === T.g.Vb || U(17) && e === T.g.Ne || N(this, "access_consent", e, "write")
        }
        var f = this.h.h
          , g = f.eventId
          , h = Tx(f)
          , l = ft("consent", "default", Sc(a));
        Qt(l, g, h)
    }
    lD.O = "setDefaultConsentState";
    function mD(a, b, c) {
        return !1
    }
    mD.O = "setInWindow";
    function nD(a, b, c) {
        M(F(this), ["targetId:!string", "name:!string", "value:!*"], arguments);
        var d = Dk(a) || {};
        d[b] = Sc(c, this.h);
        var e = a;
        Bk || Ck();
        Ak[e] = d;
    }
    nD.M = "internal.setProductSettingsParameter";
    function oD(a, b, c) {
        M(F(this), ["targetId:!string", "name:!string", "value:!*"], arguments);
        for (var d = b.split("."), e = tu(nu, a).h, f = 0; f < d.length - 1; f++) {
            if (void 0 === e[d[f]])
                e[d[f]] = {};
            else if (!Qc(e[d[f]]))
                throw Error("setRemoteConfigParameter failed, path contains a non-object type: " + d[f]);
            e = e[d[f]]
        }
        e[d[f]] = Sc(c, this.h);
    }
    oD.M = "internal.setRemoteConfigParameter";
    function pD(a, b, c, d) {
        var e = this;
    }
    pD.O = "sha256";
    function qD(a, b, c) {}
    qD.M = "internal.sortRemoteConfigParameters";
    var rD = {}
      , sD = {};
    rD.O = "templateStorage";
    rD.getItem = function(a) {
        var b = null;
        N(this, "access_template_storage");
        var c = this.h.h;
        if (!c)
            throw Error("invalid program state");
        var d = c.jd();
        sD[d] && (b = sD[d].hasOwnProperty("gtm." + a) ? sD[d]["gtm." + a] : null);
        return b
    }
    ;
    rD.setItem = function(a, b) {
        N(this, "access_template_storage");
        var c = this.h.h;
        if (!c)
            throw Error("invalid program state");
        var d = c.jd();
        sD[d] = sD[d] || {};
        sD[d]["gtm." + a] = b;
    }
    ;
    rD.removeItem = function(a) {
        N(this, "access_template_storage");
        var b = this.h.h;
        if (!b)
            throw Error("invalid program state");
        var c = b.jd();
        if (!sD[c] || !sD[c].hasOwnProperty("gtm." + a))
            return;
        delete sD[c]["gtm." + a];
    }
    ;
    rD.clear = function() {
        N(this, "access_template_storage");
        var a = this.h.h;
        if (!a)
            throw Error("invalid program state");
        delete sD[a.jd()];
    }
    ;
    var tD = function(a) {
        var b;
        return b
    };
    function uD(a) {
        M(F(this), ["consentSettings:!DustMap"], arguments);
        var b = Sc(a), c;
        for (c in b)
            b.hasOwnProperty(c) && N(this, "access_consent", c, "write");
        var d = this.h.h;
        Qt(ft("consent", "update", b), d.eventId, Tx(d))
    }
    uD.O = "updateConsentState";
    var vD = function() {
        var a = new Og
          , b = function(d) {
            var e = d.M;
            if (a.m.hasOwnProperty(e))
                throw "Attempting to add a private function which already exists: " + e + ".";
            if (a.h.hasOwnProperty(e))
                throw "Attempting to add a private function with an existing API name: " + e + ".";
            a.m[e] = Ea(d) ? ig(e, d) : jg(e, d)
        }
          , c = function(d) {
            return a.add(d.O, d)
        };
        c(Nw);
        c(Tw);
        c(Fx);
        c(Ix);
        c(Jx);
        c(Nx);
        c(Ox);
        c(Qx);
        c(SC());
        c(Rx);
        c(mz);
        c(tz);
        c(uz);
        c(vz);
        c(yz);
        c(JC);
        c(KC);
        c(NC);
        c(RC);
        c(YC);
        c(ZC);
        c(aD);
        c(bD);
        c(cD);
        c(jD);
        c(kD);
        c(lD);
        c(mD);
        c(pD);
        c(rD);
        c(uD);
        a.add("Math", og());
        a.add("Object", Mg);
        a.add("TestHelper", Qg());
        a.add("assertApi", kg);
        a.add("assertThat", lg);
        a.add("decodeUri", qg);
        a.add("decodeUriComponent", rg);
        a.add("encodeUri", sg);
        a.add("encodeUriComponent", tg);
        a.add("fail", zg);
        a.add("generateRandom", Ag);
        a.add("getContainerVersion", Bg);
        a.add("getTimestamp", Cg);
        a.add("getTimestampMillis", Cg);
        a.add("getType", Dg);
        a.add("makeInteger", Fg);
        a.add("makeNumber", Gg);
        a.add("makeString", Hg);
        a.add("makeTableMap", Ig);
        a.add("mock", Lg);
        a.add("fromBase64", lz, !("atob"in z));
        a.add("localStorage", UC, !TC());
        a.add("toBase64", tD, !("btoa"in z));
        b(Qw);
        b(ix);
        b(px);
        b(ux);
        b(Dx);
        b(Gx);
        b(Lx);
        b(Px);
        b(pg);
        b(Ux);
        b(ey);
        b(jy);
        b(oy);
        b(xy);
        b(By);
        b(My);
        b(Zy);
        b(ug);
        b(az);
        b(nz);
        b(oz);
        b(rz);
        b(sz);
        b(wz);
        b(xz);
        b(QC);
        b(WC);
        b($C);
        b(dD);
        b(fD);
        b(gD);
        b(iD);
        b(nD);
        b(oD);
        b(qD);
        b(Rg);
        U(95) && b(HC);
        return function(d) {
            var e;
            if (a.h.hasOwnProperty(d))
                e = a.get(d, this);
            else {
                var f;
                if (f = a.m.hasOwnProperty(d)) {
                    var g = !1
                      , h = this.h.h;
                    if (h) {
                        var l = h.jd();
                        if (l) {
                            0 !== l.indexOf("__cvt_") && (g = !0);
                        }
                    } else
                        g = !0;
                    f = g
                }
                if (f) {
                    var n = a.m.hasOwnProperty(d) ? a.m[d] : void 0;
                    e = n
                } else
                    throw Error(d + " is not a valid API name.");
            }
            return e
        }
    };
    var wD = function() {
        return !1
    }
      , xD = function() {
        var a = {};
        return function(b, c, d) {}
    };
    var yD;
    function zD() {
        var a = yD;
        return function(b, c, d) {
            var e = d && d.event;
            AD(c);
            var f = new kb;
            m(c, function(q, r) {
                var t = Rc(r);
                void 0 === t && void 0 !== r && R(44);
                f.set(q, t)
            });
            a.h.h.D = bf();
            var g = {
                Ij: of(b),
                eventId: void 0 !== e ? e.id : void 0,
                priorityId: void 0 !== e ? e.priorityId : void 0,
                ue: void 0 !== e ? function(q) {
                    return e.Ab.ue(q)
                }
                : void 0,
                jd: function() {
                    return b
                },
                log: function() {},
                Uj: {
                    index: d && d.index,
                    type: d && d.type,
                    name: d && d.name
                }
            };
            if (wD()) {
                var h = xD()
                  , l = void 0
                  , n = void 0;
                g.Qa = {
                    rg: [],
                    Zc: {},
                    Wa: function(q, r, t) {
                        1 === r && (l = q);
                        7 === r && (n = t);
                        h(q, r, t)
                    },
                    dg: Jg()
                };
                g.log = function(q, r) {
                    if (l) {
                        var t = Array.prototype.slice.call(arguments, 1);
                        h(l, 4, {
                            level: q,
                            source: n,
                            message: t
                        })
                    }
                }
            }
            var p = ke(a, g, [b, f]);
            a.h.h.D = void 0;
            p instanceof sa && "return" === p.h && (p = p.m);
            return Sc(p)
        }
    }
    function AD(a) {
        var b = a.gtmOnSuccess
          , c = a.gtmOnFailure;
        Ea(b) && (a.gtmOnSuccess = function() {
            J(b)
        }
        );
        Ea(c) && (a.gtmOnFailure = function() {
            J(c)
        }
        )
    }
    function BD() {
        yD.h.h.K = function(a, b, c) {
            Ih.SANDBOXED_JS_SEMAPHORE = Ih.SANDBOXED_JS_SEMAPHORE || 0;
            Ih.SANDBOXED_JS_SEMAPHORE++;
            try {
                return a.apply(b, c)
            } finally {
                Ih.SANDBOXED_JS_SEMAPHORE--
            }
        }
    }
    function CD(a) {
        void 0 !== a && m(a, function(b, c) {
            for (var d = 0; d < c.length; d++) {
                var e = c[d].replace(/^_*/, "");
                gi[e] = gi[e] || [];
                gi[e].push(b)
            }
        })
    }
    ;var DD = encodeURI
      , Y = encodeURIComponent
      , ED = function(a, b, c) {
        pc(a, b, c)
    }
      , FD = function(a, b) {
        if (!a)
            return !1;
        var c = Yi($i(a), "host");
        if (!c)
            return !1;
        for (var d = 0; b && d < b.length; d++) {
            var e = b[d] && b[d].toLowerCase();
            if (e) {
                var f = c.length - e.length;
                0 < f && "." != e.charAt(0) && (f--,
                e = "." + e);
                if (0 <= f && c.indexOf(e, f) == f)
                    return !0
            }
        }
        return !1
    }
      , GD = function(a, b, c) {
        for (var d = {}, e = !1, f = 0; a && f < a.length; f++)
            a[f] && a[f].hasOwnProperty(b) && a[f].hasOwnProperty(c) && (d[a[f][b]] = a[f][c],
            e = !0);
        return e ? d : null
    };
    var Z = {
        o: {}
    };
    Z.o.access_template_storage = ["google"],
    function() {
        (function(a) {
            Z.__access_template_storage = a;
            Z.__access_template_storage.s = "access_template_storage";
            Z.__access_template_storage.isVendorTemplate = !0;
            Z.__access_template_storage.priorityOverride = 0;
            Z.__access_template_storage.isInfrastructure = !1
        }
        )(function() {
            return {
                assert: function() {},
                Z: function() {
                    return {}
                }
            }
        })
    }();

    Z.o.c = ["google"],
    function() {
        (function(a) {
            Z.__c = a;
            Z.__c.s = "c";
            Z.__c.isVendorTemplate = !0;
            Z.__c.priorityOverride = 0;
            Z.__c.isInfrastructure = !1
        }
        )(function(a) {
            mw(a.vtp_value, "c", a.vtp_gtmEventId);
            return a.vtp_value
        })
    }();
    Z.o.e = ["google"],
    function() {
        (function(a) {
            Z.__e = a;
            Z.__e.s = "e";
            Z.__e.isVendorTemplate = !0;
            Z.__e.priorityOverride = 0;
            Z.__e.isInfrastructure = !1
        }
        )(function(a) {
            return String(a.vtp_gtmCachedValues.event)
        })
    }();
    Z.o.v = ["google"],
    function() {
        (function(a) {
            Z.__v = a;
            Z.__v.s = "v";
            Z.__v.isVendorTemplate = !0;
            Z.__v.priorityOverride = 0;
            Z.__v.isInfrastructure = !1
        }
        )(function(a) {
            var b = a.vtp_name;
            if (!b || !b.replace)
                return !1;
            var c = ew(b.replace(/\\\./g, "."), a.vtp_dataLayerVersion || 1)
              , d = void 0 !== c ? c : a.vtp_defaultValue;
            mw(d, "v", a.vtp_gtmEventId);
            return d
        })
    }();

    Z.o.process_dom_events = ["google"],
    function() {
        function a(b, c, d) {
            return {
                targetType: c,
                eventName: d
            }
        }
        (function(b) {
            Z.__process_dom_events = b;
            Z.__process_dom_events.s = "process_dom_events";
            Z.__process_dom_events.isVendorTemplate = !0;
            Z.__process_dom_events.priorityOverride = 0;
            Z.__process_dom_events.isInfrastructure = !1
        }
        )(function(b) {
            for (var c = b.vtp_targets || [], d = b.vtp_createPermissionError, e = {}, f = 0; f < c.length; f++) {
                var g = c[f];
                e[g.targetType] = e[g.targetType] || [];
                e[g.targetType].push(g.eventName)
            }
            return {
                assert: function(h, l, n) {
                    if (!e[l])
                        throw d(h, {}, "Prohibited event target " + l + ".");
                    if (-1 === e[l].indexOf(n))
                        throw d(h, {}, "Prohibited listener registration for DOM event " + n + ".");
                },
                Z: a
            }
        })
    }();

    Z.o.read_container_data = ["google"],
    function() {
        (function(a) {
            Z.__read_container_data = a;
            Z.__read_container_data.s = "read_container_data";
            Z.__read_container_data.isVendorTemplate = !0;
            Z.__read_container_data.priorityOverride = 0;
            Z.__read_container_data.isInfrastructure = !1
        }
        )(function() {
            return {
                assert: function() {},
                Z: function() {
                    return {}
                }
            }
        })
    }();
    Z.o.listen_data_layer = ["google"],
    function() {
        function a(b, c) {
            return {
                eventName: c
            }
        }
        (function(b) {
            Z.__listen_data_layer = b;
            Z.__listen_data_layer.s = "listen_data_layer";
            Z.__listen_data_layer.isVendorTemplate = !0;
            Z.__listen_data_layer.priorityOverride = 0;
            Z.__listen_data_layer.isInfrastructure = !1
        }
        )(function(b) {
            var c = b.vtp_accessType
              , d = b.vtp_allowedEvents || []
              , e = b.vtp_createPermissionError;
            return {
                assert: function(f, g) {
                    if (!k(g))
                        throw e(f, {
                            eventName: g
                        }, "Event name must be a string.");
                    if (!("any" === c || "specific" === c && 0 <= d.indexOf(g)))
                        throw e(f, {
                            eventName: g
                        }, "Prohibited listen on data layer event.");
                },
                Z: a
            }
        })
    }();

    Z.o.get_url = ["google"],
    function() {
        function a(b, c, d) {
            return {
                component: c,
                queryKey: d
            }
        }
        (function(b) {
            Z.__get_url = b;
            Z.__get_url.s = "get_url";
            Z.__get_url.isVendorTemplate = !0;
            Z.__get_url.priorityOverride = 0;
            Z.__get_url.isInfrastructure = !1
        }
        )(function(b) {
            var c = "any" === b.vtp_urlParts ? null : [];
            c && (b.vtp_protocol && c.push("protocol"),
            b.vtp_host && c.push("host"),
            b.vtp_port && c.push("port"),
            b.vtp_path && c.push("path"),
            b.vtp_extension && c.push("extension"),
            b.vtp_query && c.push("query"),
            b.vtp_fragment && c.push("fragment"));
            var d = c && "any" !== b.vtp_queriesAllowed ? b.vtp_queryKeys || [] : null
              , e = b.vtp_createPermissionError;
            return {
                assert: function(f, g, h) {
                    if (g) {
                        if (!k(g))
                            throw e(f, {}, "URL component must be a string.");
                        if (c && 0 > c.indexOf(g))
                            throw e(f, {}, "Prohibited URL component: " + g);
                        if ("query" === g && d) {
                            if (!h)
                                throw e(f, {}, "Prohibited from getting entire URL query when query keys are specified.");
                            if (!k(h))
                                throw e(f, {}, "Query key must be a string.");
                            if (0 > d.indexOf(h))
                                throw e(f, {}, "Prohibited query key: " + h);
                        }
                    } else if (c)
                        throw e(f, {}, "Prohibited from getting entire URL when components are specified.");
                },
                Z: a
            }
        })
    }();
    Z.o.gct = ["google"],
    function() {
        function a(d) {
            for (var e = [], f = 0; f < d.length; f++)
                try {
                    e.push(new RegExp(d[f]))
                } catch (g) {}
            return e
        }
        function b(d) {
            return d.replace(/[.*+\-?^${}()|[\]\\]/g, "\\$&")
        }
        function c(d) {
            for (var e = [], f = 0; f < d.length; f++) {
                var g = d[f].matchValue, h;
                switch (d[f].matchType) {
                case "BEGINS_WITH":
                    h = "^" + b(g);
                    break;
                case "ENDS_WITH":
                    h = b(g) + "$";
                    break;
                case "EQUALS":
                    h = "^" + b(g) + "$";
                    break;
                case "REGEX":
                    h = g;
                    break;
                default:
                    h = b(g)
                }
                e.push(h)
            }
            return e
        }
        (function(d) {
            Z.__gct = d;
            Z.__gct.s = "gct";
            Z.__gct.isVendorTemplate = !0;
            Z.__gct.priorityOverride = 0;
            Z.__gct.isInfrastructure = !1
        }
        )(function(d) {
            var e = {}
              , f = d.vtp_sessionDuration;
            0 < f && (e[T.g.Qc] = f);
            e[T.g.Yd] = d.vtp_eventSettings;
            e[T.g.Ve] = d.vtp_dynamicEventSettings;
            e[T.g.ib] = 1 === d.vtp_googleSignals;
            e[T.g.de] = d.vtp_foreignTld;
            e[T.g.af] = 1 === d.vtp_restrictDomain;
            e[T.g.cf] = d.vtp_internalTrafficResults;
            var g = T.g.ya
              , h = d.vtp_linker;
            h && h[T.g.T] && (h[T.g.T] = a(h[T.g.T]));
            e[g] = h;
            var l = T.g.ie
              , n = d.vtp_referralExclusionDefinition;
            n && n.include_conditions && (n.include_conditions = a(n.include_conditions));
            e[l] = n;
            var p = d.vtp_trackingId
              , q = tu(nu, p).h
              , r = q.referral_exclusion_conditions;
            r && (r.length && "object" === typeof r[0] && (r = c(r)),
            e[T.g.ie] = {
                include_conditions: a(r)
            });
            var t = q.cross_domain_conditions;
            if (t) {
                t.length && "object" === typeof t[0] && (t = c(t));
                var u = {};
                e[T.g.ya] = (u[T.g.T] = a(t),
                u[T.g.Ib] = !0,
                u[T.g.fc] = !0,
                u[T.g.hc] = "query",
                u)
            }
            wu(p, e);
            hB(p, d.vtp_gtmEventId);
            J(d.vtp_gtmOnSuccess)
        })
    }();

    Z.o.get = ["google"],
    function() {
        (function(a) {
            Z.__get = a;
            Z.__get.s = "get";
            Z.__get.isVendorTemplate = !0;
            Z.__get.priorityOverride = 0;
            Z.__get.isInfrastructure = !1
        }
        )(function(a) {
            var b = a.vtp_settings
              , c = b.eventParameters || {}
              , d = String(a.vtp_eventName)
              , e = {};
            e.eventId = a.vtp_gtmEventId;
            e.priorityId = a.vtp_gtmPriorityId;
            a.vtp_deferrable && (e.deferrable = !0);
            var f = At(String(b.streamId), d, c);
            Qt(f, e.eventId, e);
            a.vtp_gtmOnSuccess()
        })
    }();

    var YE = {};
    YE.dataLayer = pi;
    YE.callback = function(a) {
        fi.hasOwnProperty(a) && Ea(fi[a]) && fi[a]();
        delete fi[a]
    }
    ;
    YE.bootstrap = 0;
    YE._spx = !1;
    function ZE() {
        Ih[L.C] = Ih[L.C] || YE;
        L.rb && (Ih["ctid_" + L.rb] = YE);
        Ul();
        Wl() || m(Xl(), function(a, b) {
            ks(a, b.transportUrl, b.context);
            R(92)
        });
        Ya(gi, Z.o);
        Se = ff
    }
    (function(a) {
        function b() {
            l = H.documentElement.getAttribute("data-tag-assistant-present");
            wv(l) && (h = g.lj)
        }
        if (!z["__TAGGY_INSTALLED"]) {
            var c = !1;
            if (H.referrer) {
                var d = $i(H.referrer);
                c = "cct.google" === Xi(d, "host")
            }
            if (!c) {
                var e = jj("googTaggyReferrer");
                c = e.length && e[0].length
            }
            c && (z["__TAGGY_INSTALLED"] = !0,
            mc("https://cct.google/taggy/agent.js"))
        }
        if (ai)
            a();
        else {
            var f = function(u) {
                var v = "GTM"
                  , w = "GTM";
                Oh ? (v = "OGT",
                w = "GTAG") : ai && (w = v = "OPT");
                var x = z["google.tagmanager.debugui2.queue"];
                x || (x = [],
                z["google.tagmanager.debugui2.queue"] = x,
                mc("https://" + Hh.Gd + "/debug/bootstrap?id=" + L.C + "&src=" + w + "&cond=" + u + "&gtm=" + Zl()));
                var y = {
                    messageType: "CONTAINER_STARTING",
                    data: {
                        scriptSource: gc,
                        containerProduct: v,
                        debug: !1,
                        id: L.C,
                        isGte: Nh
                    }
                };
                y.data.resume = function() {
                    a()
                }
                ;
                Hh.Ei && (y.data.initialPublish = !0);
                x.push(y)
            }
              , g = {
                Al: 1,
                mj: 2,
                yj: 3,
                Gi: 4,
                lj: 5
            }
              , h = void 0
              , l = void 0
              , n = Yi(z.location, "query", !1, void 0, "gtm_debug");
            wv(n) && (h = g.mj);
            if (!h && H.referrer) {
                var p = $i(H.referrer);
                "tagassistant.google.com" === Xi(p, "host") && (h = g.yj)
            }
            if (!h) {
                var q = jj("__TAG_ASSISTANT");
                q.length && q[0].length && (h = g.Gi)
            }
            h || b();
            if (!h && xv(l)) {
                var r = function() {
                    if (t)
                        return !0;
                    t = !0;
                    b();
                    h && gc ? f(h) : a()
                }
                  , t = !1;
                qc(H, "TADebugSignal", function() {
                    r()
                }, !1);
                z.setTimeout(function() {
                    r()
                }, 200)
            } else
                h && gc ? f(h) : a()
        }
    }
    )(function() {
        var a = !1;
        a && Hr("INIT");
        if (U(70)) {
            var b = cr(Yq.F.Pe, L.C);
            dr(b)
        }
        xi().m();
        Jm();
        if (L.rb ? Ih["ctid_" + L.rb] : Ih[L.C]) {
            var c = Ih.zones;
            c && c.unregisterChild(zl());
        } else {
            (U(11) || U(13) || U(55) || U(48)) && bo();
            for (var d = data.resource || {}, e = d.macros || [], f = 0; f < e.length; f++)
                Ie.push(e[f]);
            for (var g = d.tags || [], h = 0; h < g.length; h++)
                Le.push(g[h]);
            for (var l = d.predicates || [], n = 0; n < l.length; n++)
                Ke.push(l[n]);
            for (var p = d.rules || [], q = 0; q < p.length; q++) {
                for (var r = p[q], t = {}, u = 0; u < r.length; u++)
                    t[r[u][0]] = Array.prototype.slice.call(r[u], 1);
                Je.push(t)
            }
            Ne = Z;
            Oe = Lw;
            nf = new mf;
            var v = data.sandboxed_scripts
              , w = data.security_groups
              , x = data.infra
              , y = data.runtime || []
              , A = data.runtime_lines;
            yD = new ie;
            BD();
            He = zD();
            var B = yD
              , C = vD();
            nb(B.h, "require", C);
            for (var D = 0; D < y.length; D++) {
                var I = y[D];
                if (!Ia(I) || 3 > I.length) {
                    if (0 === I.length)
                        continue;
                    break
                }
                A && A[D] && A[D].length && Ze(I, A[D]);
                try {
                    yD.execute(I)
                } catch (Va) {}
            }
            if (void 0 !== v)
                for (var G = ["sandboxedScripts"], O = 0; O < v.length; O++) {
                    var Q = v[O].replace(/^_*/, "");
                    gi[Q] = G
                }
            CD(w);
            if (void 0 !== x)
                for (var aa = 0; aa < x.length; aa++)
                    hi[x[aa]] = !0;
            ZE();
            vv();
            zs = !1;
            As = 0;
            if ("interactive" == H.readyState && !H.createEventObject || "complete" == H.readyState)
                Cs();
            else {
                qc(H, "DOMContentLoaded", Cs);
                qc(H, "readystatechange", Cs);
                if (H.createEventObject && H.documentElement.doScroll) {
                    var oa = !0;
                    try {
                        oa = !z.frameElement
                    } catch (Va) {}
                    oa && Ds()
                }
                qc(z, "load", Cs)
            }
            Ku = !1;
            "complete" === H.readyState ? Mu() : qc(z, "load", Mu);
            Vm && z.setInterval($m, 864E5);
            wb("HEALTH", 1);
            ei = Ua();
            YE.bootstrap = ei;
            YE._spx = !0,
            tv();
            if (a) {
                var fa = Ir("INIT");
            }
            if (U(70)) {
                var ba = cr(Yq.F.yg, L.C);
                if (dr(ba)) {
                    var Fa = cr(Yq.F.Pe, L.C);
                    er(ba, Fa)
                }
            }
        }
    });

}
)()
