/**
 * 注册页
 * @see https://screeps.com/a/#!/register
 */
const content: PageContent = {
    hashs: ['#!/register'],
    content: [
        { 'en-US': 'Player Name', 'zh-CN': '玩家名' },
        { 'en-US': 'E-mail', 'zh-CN': '邮箱' },

        // 用户名
        {
            'en-US': 'Other players will see this unique name at your rooms, creeps, and structures. At least 3 alphanumeric characters.',
            'zh-CN': '其他玩家会在您的房间、creep 以及建筑上看到这个唯一的名字。需要至少三个数字或字母字符。',
            'reuse': true
        },
        {
            'en-US': /Minimum \d characters./,
            'zh-CN': (text: string) => text.replace('Minimum', '至少').replace('characters.', '个字符。'),
            'reuse': true
        },
        {
            'en-US': 'This name is already used by another user.',
            'zh-CN': '该名称已经被其他玩家使用了。',
            'reuse': true
        },
        {
            'en-US': 'Only alphanumeric characters are allowed.',
            'zh-CN': '仅允许使用数字或字母字符。',
            'reuse': true
        },

        // 邮箱
        {
            'en-US': 'You will be able to use this e-mail to notify yourself on custom events via in-game API. No spam, we promise.',
            'zh-CN': '您可以通过游戏内 API，在自定义事件发生时向该邮箱发送通知。我们保证不会发送垃圾邮件。',
            'reuse': true
        },
        {
            'en-US': 'Must be a valid e-mail address.',
            'zh-CN': '必须为有效的邮箱地址。',
            'reuse': true
        },
        {
            'en-US': 'This e-mail is already used by another user.',
            'zh-CN': '该邮箱已经被其他玩家使用了。',
            'reuse': true
        },

        // 密码
        {
            'en-US': 'Must be at least 8 characters including at least one numeric character.',
            'zh-CN': '最少需要 8 个字符，包括至少一个数字字符。',
            'reuse': true
        },
        {
            'en-US': 'Please include at least one non-numeric character.',
            'zh-CN': '请确保至少有一个非数字字符。',
            'reuse': true
        },
        {
            'en-US': 'Confirm Password',
            'zh-CN': '确认密码'
        },
        {
            'en-US': 'Once again please.',
            'zh-CN': '请重复一遍您的密码。',
            'reuse': true
        },
        {
            'en-US': 'Password doesn\'t match.',
            'zh-CN': '密码不匹配。',
            'reuse': true
        },

        // 邮箱确认
        { 'en-US': 'Verify E-mail', 'zh-CN': '邮箱确认', 'reuse': true },
        { 'en-US': 'We have sent a confirmation e-mail to you.', 'zh-CN': '我们已向您发送了一份确认邮件。', 'reuse': true },
        { 'en-US': 'Please check your mail and click the link there.', 'zh-CN': '请检查您的邮件并点击其中的链接。', 'reuse': true },

        {
            'en-US': 'By submitting this information you acknowledge that you have read and agree to be bound by the',
            'zh-CN': '提交这些信息，即表示您确认您已阅读并同意 '
        },
        { 'en-US': 'Register', 'zh-CN': '注册' },
        { 'en-US': 'Set username', 'zh-CN': '设置用户名', 'reuse': true },

        // 重置密码
        { 'en-US': 'Password Reset', 'zh-CN': '重置密码' },
        { 'en-US': 'Please specify your account e-mail address.', 'zh-CN': '请输入您账户的邮箱地址。' },
        { 'en-US': 'Send', 'zh-CN': '发送' },
        { 'en-US': 'This e-mail does not exist.', 'zh-CN': '邮箱不存在。', 'reuse': true },
        {
            'en-US': 'We have sent an e-mail to your account address with the instructions of how to change your password.',
            'zh-CN': '我们已向您的账户地址发送了一封电子邮件，其中包含如何更改密码的说明。',
            'reuse': true
        },

        { 'en-US': 'I don\'t want to use in-game notifications', 'zh-CN': '我不想使用游戏内通知', 'reuse': true },
        { 'en-US': 'You can specify your e-mail later in your account settings.', 'zh-CN': '您可以稍后在账户设置中填写邮箱。', 'reuse': true },
        { 'en-US': 'I have an account at screeps.com', 'zh-CN': '我已有 screeps.com 账户', 'reuse': true },
        { 'en-US': 'Only alphanumeric and special characters are allowed.', 'zh-CN': '仅允许使用字母、数字和特殊字符。', 'reuse': true },
        { 'en-US': 'Please include at least one numeric character.', 'zh-CN': '请至少包含一个数字字符。', 'reuse': true },
        { 'en-US': 'Must be at least 8 characters including at least one numeric letter.', 'zh-CN': '最少需要 8 个字符，包括至少一个数字。', 'reuse': true },
        { 'en-US': 'Change Password', 'zh-CN': '修改密码', 'reuse': true },
        { 'en-US': 'Your New Password', 'zh-CN': '新密码', 'reuse': true },
        { 'en-US': 'An error occured while performing the request', 'zh-CN': '执行请求时发生错误', 'reuse': true },
        { 'en-US': 'Your password has been changed successfully.', 'zh-CN': '您的密码已成功修改。', 'reuse': true },
        { 'en-US': 'This password reset link is no longer valid.', 'zh-CN': '此密码重置链接已失效。', 'reuse': true },
        { 'en-US': 'Done!', 'zh-CN': '完成！', 'reuse': true },
        { 'en-US': 'Your account has been activated!', 'zh-CN': '您的账户已激活！', 'reuse': true },
        { 'en-US': 'Click the button below to proceed to the game.', 'zh-CN': '请点击下方按钮进入游戏。', 'reuse': true },
        { 'en-US': 'Your email has been successfully verified.', 'zh-CN': '您的邮箱已成功验证。', 'reuse': true },
        { 'en-US': 'Error', 'zh-CN': '错误', 'reuse': true },
        { 'en-US': 'An error occured while verifying your email.', 'zh-CN': '验证邮箱时发生错误。', 'reuse': true },
        { 'en-US': 'contact our support', 'zh-CN': '联系我们的支持', 'reuse': true },
        { 'en-US': 'for further details.', 'zh-CN': '以获取更多信息。', 'reuse': true },
        {
            'en-US': 'New account registration is disabled on the Public Test Realm server.',
            'zh-CN': '公共测试服务器已关闭新账户注册。',
            'reuse': true
        }
    ]
}

export default content
