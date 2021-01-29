(function(global) {
    global.$_Tawk_AccountKey = '5f60eaf3f0e7167d00108f17';
    global.$_Tawk_WidgetId = 'default';
    global.$_Tawk_Unstable = false;
    global.$_Tawk = global.$_Tawk || {};
    (function(b) {
        var a = {
            pluralFormFunction: function(a) {
                return 1 === a ? "one" : "other"
            },
            form: {}
        };
        a.form.SaveButton = {
            message: "Save"
        };
        a.form.SubmitButton = {
            message: "Submit"
        };
        a.form.StartChatButton = {
            message: "Start Chat"
        };
        a.form.CancelButton = {
            message: "Cancel"
        };
        a.form.CloseButton = {
            message: "Close"
        };
        a.form.SendButton = {
            message: "Send"
        };
        a.form.EmailPlaceholder = {
            message: "Email Address"
        };
        a.form.QuestionPlaceholder = {
            message: "your query.."
        };
        a.form.DepartmentsPlaceholder = {
            message: "select department.."
        };
        a.form.MessagePlaceholder = {
            message: "your message.."
        };
        a.form.NameErrorMessage = {
            message: "Name must be provided."
        };
        a.form.EmailErrorMessage = {
            message: "Invalid email address."
        };
        a.form.DepartmentsErrorMessage = {
            message: "Department is required."
        };
        a.form.QuestionErrorMessage = {
            message: "Question is required and must not be longer then 500 characters."
        };
        a.form.MessageErrorMessage = {
            message: "Message is required and must not be longer then 500 characters."
        };
        a.form.NameFormMessage = {
            message: "Please change your name so we can recognize you the next time."
        };
        a.form.EmailTranscriptFormMessage = {
            message: "Please fill out the form below to have this conversation sent to your email address."
        };
        a.form.PreChatFormMessage = {
            message: "Please fill out the form below to start chatting with the next available agent."
        };
        a.form.OfflineFormMessage = {
            message: "Please fill out the form below and we will get back to you as soon as possible."
        };
        a.form.PreChatFormMessageProfile = {
            message: "Please fill out the form below to start chatting with me."
        };
        a.form.OfflineMessageSent = {
            message: "Your message was sent successfully!"
        };
        a.form.OfflineMessageNotSent = {
            message: "Your message was not delivered, please retry"
        };
        a.form.EndChatTitle = {
            message: "Are you sure you want to end this chat?"
        };
        a.form.RequiredErrorMessage = {
            message: "This field is required"
        };
        a.form.PhoneErrorMessage = {
            message: "Invalid phone number"
        };
        a.form.saved = {
            message: "Saved"
        };
        a.form.errorSaving = {
            message: "Unable to save. Please try again"
        };
        a.form.visitButton = {
            message: "Visit tawk.to"
        };
        a.form.SubmittingProcess = {
            message: "Submitting"
        };
        a.form.EndingProcess = {
            message: "Ending"
        };
        a.form.SendingProcess = {
            message: "Sending"
        };
        a.form.SavingProcess = {
            message: "Saving"
        };
        a.form.EmailTranscriptTo = {
            message: "Email transcript to"
        };
        a.form.name = {
            message: "Name"
        };
        a.form.email = {
            message: "Email"
        };
        a.form.department = {
            message: "Department"
        };
        a.form.message = {
            message: "Message"
        };
        a.form.any = {
            message: "Any"
        };
        a.form.phone = {
            message: "Phone"
        };
        a.form.question = {
            message: "Question"
        };
        a.form.saving = {
            message: "Saving.."
        };
        a.form.SubmittedFrom = {
            message: "Submitted From"
        };
        a.form.SendMessage = {
            message: "Send message"
        };
        a.form.sendAgain = {
            message: "Send Again"
        };
        a.form.ChangeUsername = {
            message: "Change username"
        };
        a.form.HelloAndWelcome = {
            message: "Hello and Welcome"
        };
        a.form.EndChatMessage = {
            message: "Thank you for chatting with us. Feel free to start new chat session or enter your email and send a transcript of this conversation to your inbox."
        };
        a.form.TranscriptMessage = {
            message: "Feel free to enter your email and send a transcript of this conversation to your inbox."
        };
        a.form.chatEnded = {
            message: "Your chat has ended"
        };
        a.form.skip = {
            message: "Skip"
        };
        a.rollover = {};
        a.rollover.popOut = {
            message: "Pop out"
        };
        a.rollover.minimize = {
            message: "Minimize"
        };
        a.rollover.resize = {
            message: "Resize"
        };
        a.rollover.resendMessage = {
            message: "Resend message"
        };
        a.rollover.emailTranscriptOption = {
            message: "Email Transcript"
        };
        a.rollover.positiveRating = {
            message: "Rate this conversation with +1"
        };
        a.rollover.negativeRating = {
            message: "Rate this conversation with -1"
        };
        a.rollover.maximize = {
            message: "Maximize"
        };
        a.rollover.end = {
            message: "End Chat"
        };
        a.rollover.uploadFile = {
            message: "Upload File"
        };
        a.rollover.videoCall = {
            message: "Video Call"
        };
        a.rollover.voiceCall = {
            message: "Voice Call"
        };
        a.rollover.screenShare = {
            message: "Screen Share"
        };
        a.rollover.chatMenu = {
            message: "Menu"
        };
        a.rollover.knowledgeBase = {
            message: "knowledge Base"
        };
        a.transcript = {};
        a.transcript.transcriptSubject = {
            message: "Chat email transcript on #host started on #startedOn",
            vars: ["host", "startedOn"]
        };
        a.transcript.transcriptStartedOn = {
            message: "#dateString, at #time",
            vars: ["dateString", "time"]
        };
        a.transcript.me = {
            message: "Me"
        };
        a.transcript.CONVERSATION_STARTED_ON = {
            message: "Conversation started on"
        };
        a.overlay = {};
        a.overlay.inactive = {
            message: "Click here to reinitiate the chat"
        };
        a.overlay.maintenance = {
            message: "Chat is in maintenance"
        };
        a.overlay.cookiesOff = {
            message: "You can't use this chat because your browser's cookie functionality is turned off. Please turn it on and refresh your browser."
        };
        a.overlay.tawkContent = {
            message: "This widget is powered by tawk.to - a free messaging application that lets you monitor and engage with the visitors on your website."
        };
        a.chat = {};
        a.chat.visitor_name = {
            message: "Visitor name"
        };
        a.chat.like = {
            message: "You liked this conversation"
        };
        a.chat.dislike = {
            message: "You disliked this conversation"
        };
        a.chat.remove_rate = {
            message: "You removed your rating for this conversation"
        };
        a.chat.sayButton = {
            message: "Say"
        };
        a.chat.hideButton = {
            message: "Hide Chat"
        };
        a.chat.send_mail = {
            message: "Send Mail"
        };
        a.chat.AGENT_JOIN_CONVERSATION = {
            message: "#n has joined the conversation",
            vars: ["n"]
        };
        a.chat.AGENT_LEFT_CONVERSATION = {
            message: "#n has left the conversation",
            vars: ["n"]
        };
        a.chat.defaultName = {
            message: "You (change name)"
        };
        a.chat.messageQueuedTitile = {
            message: "message queued"
        };
        a.chat.live_chat = {
            message: "Live Chat"
        };
        a.chat.notificationTitle = {
            message: "notification"
        };
        a.chat.departmentIsOffline = {
            message: "Department #strongStart #departmentName #strongEnd is currently offline. You might be served by another department.",
            vars: ["departmentName", "strongStart", "strongEnd"]
        };
        a.chat.departmentIsAway = {
            message: "Department #strongStart #departmentName #strongEnd is currently away.",
            vars: ["departmentName", "strongStart", "strongEnd"]
        };
        a.chat.mobileName = {
            message: "You"
        };
        a.chat.chatEnded = {
            message: "Your chat has ended"
        };
        a.chat.newChat = {
            message: "Start New Chat"
        };
        a.chat.newMessages = {
            message: "New messages"
        };
        a.chat.say_something = {
            message: "Write a reply.."
        };
        a.chat.downloadFile = {
            message: "Download File"
        };
        a.chat.download = {
            message: "Download"
        };
        a.chat.limit50 = {
            message: "The maximum file size is 50MB, please upload a smaller file."
        };
        a.chat.limit2 = {
            message: "The maximum file size is 2MB for mobile browsers, please upload a smaller file."
        };
        a.chat.generalUploadError = {
            message: '"#fileName", please try again.',
            vars: ["fileName"]
        };
        a.chat.generalUploadErrorLabel = {
            message: "Unable to upload file"
        };
        a.chat.retry = {
            message: "Retry."
        };
        a.chat.tryAgain = {
            message: "Try again."
        };
        a.chat.dragDropText = {
            message: "Drop files here to upload"
        };
        a.chat.pasted_image_title = {
            message: "Pasted image at #dateTime",
            vars: ["dateTime"]
        };
        a.chat.chat_qm = {
            message: "Chat?"
        };
        a.chat.we_are_live = {
            message: "We are live and ready to chat with you now. Say something to start a live chat."
        };
        a.chat.profile_prechat_text = {
            message: "Please fill out the form below to start chatting with me."
        };
        a.chat.incoming_call_message = {
            message: "Incoming call from #name",
            vars: ["name"]
        };
        a.chat.accept_call = {
            message: "Accept"
        };
        a.chat.decline_call = {
            message: "Decline"
        };
        a.chat.video_call_error = {
            message: "Video call is not available."
        };
        a.chat.voice_call_error = {
            message: "Voice call is not available."
        };
        a.chat.screen_share_error = {
            message: "Screen share is not available."
        };
        a.chat.message_too_long = {
            message: "Message cannot exceed 5000 characters"
        };
        a.chat.message_not_delivered = {
            message: "Message not delivered, click here to resend."
        };
        a.chat.visitor_ringing = {
            message: "Calling..."
        };
        a.chat.agent_ringing = {
            message: "Incoming Call"
        };
        a.chat.ongoing_call = {
            message: "Ongoing Call"
        };
        a.chat.completed_call = {
            message: "Call ended"
        };
        a.chat.missed_agent = {
            message: "Your call was missed"
        };
        a.chat.missed_visitor = {
            message: "You missed a call"
        };
        a.chat.missed_visitor_messagePreview = {
            message: "You missed a call from"
        };
        a.chat.rejected_call = {
            message: "You rejected this call"
        };
        a.chat.call_end_details = {
            message: "Started at #startedOn and lasted #duration",
            vars: ["startedOn", "duration"]
        };
        a.chat.call_started_on = {
            message: "Started at #startedOn",
            vars: ["startedOn"]
        };
        a.chat.error_title = {
            message: "Error"
        };
        a.chat.call_error_load = {
            message: "Unable to load call details."
        };
        a.chat.insert_emoji = {
            message: "Insert emoji"
        };
        a.chat.uploading = {
            message: "Uploading..."
        };
        a.chat.failed = {
            message: "Failed"
        };
        a.chat.resend = {
            message: "Resend"
        };
        a.chat.justNow = {
            message: "just now"
        };
        a.chat.Warning = {
            message: "Warning"
        };
        a.chat.chat_text = {
            message: "Chat"
        };
        a.chat.mail_text = {
            message: "Mail"
        };
        a.chat.emoji_error_load = {
            message: "Unable to load emojis"
        };
        a.chat.new_conversation = {
            message: "New Conversation"
        };
        a.status = {};
        a.status.online = {
            message: "Online"
        };
        a.status.away = {
            message: "Away"
        };
        a.status.offline = {
            message: "Offline"
        };
        a.months = {};
        a.months["0"] = {
            message: "January"
        };
        a.months["1"] = {
            message: "February"
        };
        a.months["2"] = {
            message: "March"
        };
        a.months["3"] = {
            message: "April"
        };
        a.months["4"] = {
            message: "May"
        };
        a.months["5"] = {
            message: "June"
        };
        a.months["6"] = {
            message: "July"
        };
        a.months["7"] = {
            message: "August"
        };
        a.months["8"] = {
            message: "September"
        };
        a.months["9"] = {
            message: "October"
        };
        a.months["10"] = {
            message: "November"
        };
        a.months["11"] = {
            message: "December"
        };
        a.days = {};
        a.days["0"] = {
            message: "Sunday"
        };
        a.days["1"] = {
            message: "Monday"
        };
        a.days["2"] = {
            message: "Tuesday"
        };
        a.days["3"] = {
            message: "Wednesday"
        };
        a.days["4"] = {
            message: "Thursday"
        };
        a.days["5"] = {
            message: "Friday"
        };
        a.days["6"] = {
            message: "Saturday"
        };
        a.menu = {};
        a.menu.change_name = {
            message: "Change Name"
        };
        a.menu.sound_on = {
            message: "Sound On"
        };
        a.menu.sound_off = {
            message: "Sound Off"
        };
        a.menu.email_transcript = {
            message: "Email transcript"
        };
        a.menu.popout_widget = {
            message: "Pop out widget"
        };
        a.menu.end_chat_session = {
            message: "End this chat session"
        };
        a.notifications = {};
        a.notifications.maximum_file_upload_warning = {
            message: "Sorry, file transfer is limited to #limitFileNumber files at a time. Please try the following file(s) again :",
            vars: ["limitFileNumber"]
        };
        a.notifications.maximum_size_upload_warning = {
            message: "Sorry, file transfer is limited to #limitFileSize per file. Please compress the following file(s) and try again.",
            vars: ["limitFileSize"]
        };
        a.notifications.retry = {
            message: "Retry"
        };
        a.chat = a.chat || {};
        a.chat.messageQueuedText = {
            vars: ["strongStart", "strongEnd"],
            pluralVars: ["t"],
            message: {
                one: "Estimated wait time is #strongStart #t minute #strongEnd",
                other: "Estimated wait time is #strongStart #t minutes #strongEnd"
            }
        };
        a.chat.newMessage = {
            vars: [],
            pluralVars: ["num"],
            message: {
                one: "#num new message",
                other: "#num new messages"
            }
        };
        a.chat.seconds = {
            vars: [],
            pluralVars: ["num"],
            message: {
                one: "#num second",
                other: "#num seconds"
            }
        };
        a.chat.minutes = {
            vars: [],
            pluralVars: ["num"],
            message: {
                one: "#num minute",
                other: "#num minutes"
            }
        };
        a.chat.hours = {
            vars: [],
            pluralVars: ["num"],
            message: {
                one: "#num hour",
                other: "#num hours"
            }
        };
        b.$_Tawk.language = a;
        b.$_Tawk.languageUpdater && b.$_Tawk.languageUpdater()
    }
    )("undefined" === typeof global ? window : global);

    (function(a) {
        function c() {
            var a = document.getElementsByTagName("script")[0]
              , b = document.createElement("script");
            b.async = !0;
            b.src = "https://static-v.tawk.to/698/app.js";
            b.charset = "UTF-8";
            b.setAttribute("crossorigin", "*");
            a.parentNode.insertBefore(b, a)
        }
        "complete" === document.readyState ? c() : a.attachEvent ? a.attachEvent("onload", c) : a.addEventListener("load", c, !1)
    }
    )(window);

}
)(window);
