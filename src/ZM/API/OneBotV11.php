<?php

/** @noinspection PhpUnused */

declare(strict_types=1);

namespace ZM\API;

use ZM\ConnectionManager\ConnectionObject;
use ZM\ConnectionManager\ManagerGM;
use ZM\Exception\RobotNotFoundException;
use ZM\Exception\ZMKnownException;

/**
 * OneBot V11 的 API 实现类
 * Class OneBotV11
 * @since 2.5.0
 */
class OneBotV11
{
    use CQAPI;

    public const API_ASYNC = 1;

    public const API_NORMAL = 0;

    public const API_RATE_LIMITED = 2;

    /** @var null|ConnectionObject */
    protected $connection;

    protected $callback = true;

    protected $prefix = 0;

    public function __construct(ConnectionObject $connection)
    {
        $this->connection = $connection;
    }

    /**
     * @param $robot_id
     * @throws RobotNotFoundException
     * @return ZMRobot
     */
    public static function get($robot_id)
    {
        $r = ManagerGM::getAllByName('qq');
        foreach ($r as $v) {
            if ($v->getOption('connect_id') == $robot_id) {
                return new ZMRobot($v);
            }
        }
        throw new RobotNotFoundException('机器人 ' . $robot_id . ' 未连接到框架！');
    }

    /**
     * @throws RobotNotFoundException
     * @return ZMRobot
     */
    public static function getRandom()
    {
        $r = ManagerGM::getAllByName('qq');
        if ($r == []) {
            throw new RobotNotFoundException('没有任何机器人连接到框架！');
        }
        return new ZMRobot($r[array_rand($r)]);
    }

    /**
     * @return ZMRobot[]
     */
    public static function getAllRobot()
    {
        $r = ManagerGM::getAllByName('qq');
        $obj = [];
        foreach ($r as $v) {
            $obj[] = new ZMRobot($v);
        }
        return $obj;
    }

    public function setCallback($callback = true)
    {
        $this->callback = $callback;
        return $this;
    }

    public function setPrefix($prefix = self::API_NORMAL)
    {
        $this->prefix = $prefix;
        return $this;
    }

    public function getSelfId()
    {
        return $this->connection->getOption('connect_id');
    }

    /* 下面是 OneBot 标准的 V11 公开 API */

    /**
     * 发送私聊消息
     * @see https://github.com/howmanybots/onebot/blob/master/v11/specs/api/public.md#send_private_msg-%E5%8F%91%E9%80%81%E7%A7%81%E8%81%8A%E6%B6%88%E6%81%AF
     * @param $user_id
     * @param $message
     * @return null|array|bool
     */
    public function sendPrivateMsg($user_id, $message, bool $auto_escape = false)
    {
        return $this->processAPI($this->connection, [
            'action' => $this->getActionName($this->prefix, __FUNCTION__),
            'params' => [
                'user_id' => $user_id,
                'message' => $message,
                'auto_escape' => $auto_escape,
            ],
        ], $this->callback);
    }

    /**
     * 发送群消息
     * @see https://github.com/howmanybots/onebot/blob/master/v11/specs/api/public.md#send_group_msg-%E5%8F%91%E9%80%81%E7%BE%A4%E6%B6%88%E6%81%AF
     * @param $group_id
     * @param $message
     * @return null|array|bool
     */
    public function sendGroupMsg($group_id, $message, bool $auto_escape = false)
    {
        return $this->processAPI($this->connection, [
            'action' => $this->getActionName($this->prefix, __FUNCTION__),
            'params' => [
                'group_id' => $group_id,
                'message' => $message,
                'auto_escape' => $auto_escape,
            ],
        ], $this->callback);
    }

    /**
     * 发送消息
     * @see https://github.com/howmanybots/onebot/blob/master/v11/specs/api/public.md#send_msg-%E5%8F%91%E9%80%81%E6%B6%88%E6%81%AF
     * @param $message_type
     * @param $target_id
     * @param $message
     * @return null|array|bool
     */
    public function sendMsg($message_type, $target_id, $message, bool $auto_escape = false)
    {
        return $this->processAPI($this->connection, [
            'action' => $this->getActionName($this->prefix, __FUNCTION__),
            'params' => [
                'message_type' => $message_type,
                ($message_type == 'private' ? 'user' : $message_type) . '_id' => $target_id,
                'message' => $message,
                'auto_escape' => $auto_escape,
            ],
        ], $this->callback);
    }

    /**
     * 撤回消息
     * @see https://github.com/howmanybots/onebot/blob/master/v11/specs/api/public.md#delete_msg-%E6%92%A4%E5%9B%9E%E6%B6%88%E6%81%AF
     * @param $message_id
     * @return null|array|bool
     */
    public function deleteMsg($message_id)
    {
        return $this->processAPI($this->connection, [
            'action' => $this->getActionName($this->prefix, __FUNCTION__),
            'params' => [
                'message_id' => $message_id,
            ],
        ], $this->callback);
    }

    /**
     * 获取消息
     * @see https://github.com/howmanybots/onebot/blob/master/v11/specs/api/public.md#get_msg-%E8%8E%B7%E5%8F%96%E6%B6%88%E6%81%AF
     * @param $message_id
     * @return null|array|bool
     */
    public function getMsg($message_id)
    {
        return $this->processAPI($this->connection, [
            'action' => $this->getActionName($this->prefix, __FUNCTION__),
            'params' => [
                'message_id' => $message_id,
            ],
        ], $this->callback);
    }

    /**
     * 获取合并转发消息
     * @see https://github.com/howmanybots/onebot/blob/master/v11/specs/api/public.md#get_forward_msg-%E8%8E%B7%E5%8F%96%E5%90%88%E5%B9%B6%E8%BD%AC%E5%8F%91%E6%B6%88%E6%81%AF
     * @param $id
     * @return null|array|bool
     */
    public function getForwardMsg($id)
    {
        return $this->processAPI($this->connection, [
            'action' => $this->getActionName($this->prefix, __FUNCTION__),
            'params' => [
                'id' => $id,
            ],
        ], $this->callback);
    }

    /**
     * 发送好友赞
     * @see https://github.com/howmanybots/onebot/blob/master/v11/specs/api/public.md#send_like-%E5%8F%91%E9%80%81%E5%A5%BD%E5%8F%8B%E8%B5%9E
     * @param $user_id
     * @return null|array|bool
     */
    public function sendLike($user_id, int $times = 1)
    {
        return $this->processAPI($this->connection, [
            'action' => $this->getActionName($this->prefix, __FUNCTION__),
            'params' => [
                'user_id' => $user_id,
                'times' => $times,
            ],
        ], $this->callback);
    }

    /**
     * 群组踢人
     * @see https://github.com/howmanybots/onebot/blob/master/v11/specs/api/public.md#set_group_kick-%E7%BE%A4%E7%BB%84%E8%B8%A2%E4%BA%BA
     * @param $group_id
     * @param $user_id
     * @return null|array|bool
     */
    public function setGroupKick($group_id, $user_id, bool $reject_add_request = false)
    {
        return $this->processAPI($this->connection, [
            'action' => $this->getActionName($this->prefix, __FUNCTION__),
            'params' => [
                'group_id' => $group_id,
                'user_id' => $user_id,
                'reject_add_request' => $reject_add_request,
            ],
        ], $this->callback);
    }

    /**
     * 群组单人禁言
     * @see https://github.com/howmanybots/onebot/blob/master/v11/specs/api/public.md#set_group_ban-%E7%BE%A4%E7%BB%84%E5%8D%95%E4%BA%BA%E7%A6%81%E8%A8%80
     * @param $group_id
     * @param $user_id
     * @return null|array|bool
     */
    public function setGroupBan($group_id, $user_id, int $duration = 1800)
    {
        return $this->processAPI($this->connection, [
            'action' => $this->getActionName($this->prefix, __FUNCTION__),
            'params' => [
                'group_id' => $group_id,
                'user_id' => $user_id,
                'duration' => $duration,
            ],
        ], $this->callback);
    }

    /**
     * 群组匿名用户禁言
     * @see https://github.com/howmanybots/onebot/blob/master/v11/specs/api/public.md#set_group_anonymous_ban-%E7%BE%A4%E7%BB%84%E5%8C%BF%E5%90%8D%E7%94%A8%E6%88%B7%E7%A6%81%E8%A8%80
     * @param $group_id
     * @param $anonymous_or_flag
     * @return null|array|bool
     */
    public function setGroupAnonymousBan($group_id, $anonymous_or_flag, int $duration = 1800)
    {
        return $this->processAPI($this->connection, [
            'action' => $this->getActionName($this->prefix, __FUNCTION__),
            'params' => [
                'group_id' => $group_id,
                (is_string($anonymous_or_flag) ? 'flag' : 'anonymous') => $anonymous_or_flag,
                'duration' => $duration,
            ],
        ], $this->callback);
    }

    /**
     * 群组全员禁言
     * @see https://github.com/howmanybots/onebot/blob/master/v11/specs/api/public.md#set_group_whole_ban-%E7%BE%A4%E7%BB%84%E5%85%A8%E5%91%98%E7%A6%81%E8%A8%80
     * @param $group_id
     * @return null|array|bool
     */
    public function setGroupWholeBan($group_id, bool $enable = true)
    {
        return $this->processAPI($this->connection, [
            'action' => $this->getActionName($this->prefix, __FUNCTION__),
            'params' => [
                'group_id' => $group_id,
                'enable' => $enable,
            ],
        ], $this->callback);
    }

    /**
     * 群组设置管理员
     * @see https://github.com/howmanybots/onebot/blob/master/v11/specs/api/public.md#set_group_admin-%E7%BE%A4%E7%BB%84%E8%AE%BE%E7%BD%AE%E7%AE%A1%E7%90%86%E5%91%98
     * @param $group_id
     * @param $user_id
     * @return null|array|bool
     */
    public function setGroupAdmin($group_id, $user_id, bool $enable = true)
    {
        return $this->processAPI($this->connection, [
            'action' => $this->getActionName($this->prefix, __FUNCTION__),
            'params' => [
                'group_id' => $group_id,
                'user_id' => $user_id,
                'enable' => $enable,
            ],
        ], $this->callback);
    }

    /**
     * 群组匿名
     * @see https://github.com/howmanybots/onebot/blob/master/v11/specs/api/public.md#set_group_anonymous-%E7%BE%A4%E7%BB%84%E5%8C%BF%E5%90%8D
     * @param $group_id
     * @return null|array|bool
     */
    public function setGroupAnonymous($group_id, bool $enable = true)
    {
        return $this->processAPI($this->connection, [
            'action' => $this->getActionName($this->prefix, __FUNCTION__),
            'params' => [
                'group_id' => $group_id,
                'enable' => $enable,
            ],
        ], $this->callback);
    }

    /**
     * 设置群名片（群备注）
     * @see https://github.com/howmanybots/onebot/blob/master/v11/specs/api/public.md#set_group_card-%E8%AE%BE%E7%BD%AE%E7%BE%A4%E5%90%8D%E7%89%87%E7%BE%A4%E5%A4%87%E6%B3%A8
     * @param $group_id
     * @param $user_id
     * @return null|array|bool
     */
    public function setGroupCard($group_id, $user_id, string $card = '')
    {
        return $this->processAPI($this->connection, [
            'action' => $this->getActionName($this->prefix, __FUNCTION__),
            'params' => [
                'group_id' => $group_id,
                'user_id' => $user_id,
                'card' => $card,
            ],
        ], $this->callback);
    }

    /**
     * 设置群名
     * @see https://github.com/howmanybots/onebot/blob/master/v11/specs/api/public.md#set_group_name-%E8%AE%BE%E7%BD%AE%E7%BE%A4%E5%90%8D
     * @param $group_id
     * @param $group_name
     * @return null|array|bool
     */
    public function setGroupName($group_id, $group_name)
    {
        return $this->processAPI($this->connection, [
            'action' => $this->getActionName($this->prefix, __FUNCTION__),
            'params' => [
                'group_id' => $group_id,
                'group_name' => $group_name,
            ],
        ], $this->callback);
    }

    /**
     * 退出群组
     * @see https://github.com/howmanybots/onebot/blob/master/v11/specs/api/public.md#set_group_leave-%E9%80%80%E5%87%BA%E7%BE%A4%E7%BB%84
     * @param $group_id
     * @return null|array|bool
     */
    public function setGroupLeave($group_id, bool $is_dismiss = false)
    {
        return $this->processAPI($this->connection, [
            'action' => $this->getActionName($this->prefix, __FUNCTION__),
            'params' => [
                'group_id' => $group_id,
                'is_dismiss' => $is_dismiss,
            ],
        ], $this->callback);
    }

    /**
     * 设置群组专属头衔
     * @see https://github.com/howmanybots/onebot/blob/master/v11/specs/api/public.md#set_group_special_title-%E8%AE%BE%E7%BD%AE%E7%BE%A4%E7%BB%84%E4%B8%93%E5%B1%9E%E5%A4%B4%E8%A1%94
     * @param $group_id
     * @param $user_id
     * @return null|array|bool
     */
    public function setGroupSpecialTitle($group_id, $user_id, string $special_title = '', int $duration = -1)
    {
        return $this->processAPI($this->connection, [
            'action' => $this->getActionName($this->prefix, __FUNCTION__),
            'params' => [
                'group_id' => $group_id,
                'user_id' => $user_id,
                'special_title' => $special_title,
                'duration' => $duration,
            ],
        ], $this->callback);
    }

    /**
     * 处理加好友请求
     * @see https://github.com/howmanybots/onebot/blob/master/v11/specs/api/public.md#set_friend_add_request-%E5%A4%84%E7%90%86%E5%8A%A0%E5%A5%BD%E5%8F%8B%E8%AF%B7%E6%B1%82
     * @param $flag
     * @return null|array|bool
     */
    public function setFriendAddRequest($flag, bool $approve = true, string $remark = '')
    {
        return $this->processAPI($this->connection, [
            'action' => $this->getActionName($this->prefix, __FUNCTION__),
            'params' => [
                'flag' => $flag,
                'approve' => $approve,
                'remark' => $remark,
            ],
        ], $this->callback);
    }

    /**
     * 处理加群请求／邀请
     * @see https://github.com/howmanybots/onebot/blob/master/v11/specs/api/public.md#set_group_add_request-%E5%A4%84%E7%90%86%E5%8A%A0%E7%BE%A4%E8%AF%B7%E6%B1%82%E9%82%80%E8%AF%B7
     * @param $flag
     * @param $sub_type
     * @return null|array|bool
     */
    public function setGroupAddRequest($flag, $sub_type, bool $approve = true, string $reason = '')
    {
        return $this->processAPI($this->connection, [
            'action' => $this->getActionName($this->prefix, __FUNCTION__),
            'params' => [
                'flag' => $flag,
                'sub_type' => $sub_type,
                'approve' => $approve,
                'reason' => $reason,
            ],
        ], $this->callback);
    }

    /**
     * 获取登录号信息
     * @see https://github.com/howmanybots/onebot/blob/master/v11/specs/api/public.md#get_login_info-%E8%8E%B7%E5%8F%96%E7%99%BB%E5%BD%95%E5%8F%B7%E4%BF%A1%E6%81%AF
     * @return null|array|bool
     */
    public function getLoginInfo()
    {
        return $this->processAPI($this->connection, ['action' => $this->getActionName($this->prefix, __FUNCTION__)], $this->callback);
    }

    /**
     * 获取陌生人信息
     * @see https://github.com/howmanybots/onebot/blob/master/v11/specs/api/public.md#get_stranger_info-%E8%8E%B7%E5%8F%96%E9%99%8C%E7%94%9F%E4%BA%BA%E4%BF%A1%E6%81%AF
     * @param $user_id
     * @return null|array|bool
     */
    public function getStrangerInfo($user_id, bool $no_cache = false)
    {
        return $this->processAPI($this->connection, [
            'action' => $this->getActionName($this->prefix, __FUNCTION__),
            'params' => [
                'user_id' => $user_id,
                'no_cache' => $no_cache,
            ],
        ], $this->callback);
    }

    /**
     * 获取好友列表
     * @see https://github.com/howmanybots/onebot/blob/master/v11/specs/api/public.md#get_friend_list-%E8%8E%B7%E5%8F%96%E5%A5%BD%E5%8F%8B%E5%88%97%E8%A1%A8
     * @return null|array|bool
     */
    public function getFriendList()
    {
        return $this->processAPI($this->connection, [
            'action' => $this->getActionName($this->prefix, __FUNCTION__),
        ], $this->callback);
    }

    /**
     * 获取群信息
     * @see https://github.com/howmanybots/onebot/blob/master/v11/specs/api/public.md#get_group_info-%E8%8E%B7%E5%8F%96%E7%BE%A4%E4%BF%A1%E6%81%AF
     * @param $group_id
     * @return null|array|bool
     */
    public function getGroupInfo($group_id, bool $no_cache = false)
    {
        return $this->processAPI($this->connection, [
            'action' => $this->getActionName($this->prefix, __FUNCTION__),
            'params' => [
                'group_id' => $group_id,
                'no_cache' => $no_cache,
            ],
        ], $this->callback);
    }

    /**
     * 获取群列表
     * @see https://github.com/howmanybots/onebot/blob/master/v11/specs/api/public.md#get_group_list-%E8%8E%B7%E5%8F%96%E7%BE%A4%E5%88%97%E8%A1%A8
     * @return null|array|bool
     */
    public function getGroupList()
    {
        return $this->processAPI($this->connection, [
            'action' => $this->getActionName($this->prefix, __FUNCTION__),
        ], $this->callback);
    }

    /**
     * 获取群成员信息
     * @see https://github.com/howmanybots/onebot/blob/master/v11/specs/api/public.md#get_group_member_info-%E8%8E%B7%E5%8F%96%E7%BE%A4%E6%88%90%E5%91%98%E4%BF%A1%E6%81%AF
     * @param $group_id
     * @param $user_id
     * @return null|array|bool
     */
    public function getGroupMemberInfo($group_id, $user_id, bool $no_cache = false)
    {
        return $this->processAPI($this->connection, [
            'action' => $this->getActionName($this->prefix, __FUNCTION__),
            'params' => [
                'group_id' => $group_id,
                'user_id' => $user_id,
                'no_cache' => $no_cache,
            ],
        ], $this->callback);
    }

    /**
     * 获取群成员列表
     * @see https://github.com/howmanybots/onebot/blob/master/v11/specs/api/public.md#get_group_member_list-%E8%8E%B7%E5%8F%96%E7%BE%A4%E6%88%90%E5%91%98%E5%88%97%E8%A1%A8
     * @param $group_id
     * @return null|array|bool
     */
    public function getGroupMemberList($group_id)
    {
        return $this->processAPI($this->connection, [
            'action' => $this->getActionName($this->prefix, __FUNCTION__),
            'params' => [
                'group_id' => $group_id,
            ],
        ], $this->callback);
    }

    /**
     * 获取群荣誉信息
     * @see https://github.com/howmanybots/onebot/blob/master/v11/specs/api/public.md#get_group_honor_info-%E8%8E%B7%E5%8F%96%E7%BE%A4%E8%8D%A3%E8%AA%89%E4%BF%A1%E6%81%AF
     * @param $group_id
     * @param $type
     * @return null|array|bool
     */
    public function getGroupHonorInfo($group_id, $type)
    {
        return $this->processAPI($this->connection, [
            'action' => $this->getActionName($this->prefix, __FUNCTION__),
            'params' => [
                'group_id' => $group_id,
                'type' => $type,
            ],
        ], $this->callback);
    }

    /**
     * 获取 CSRF Token
     * @see https://github.com/howmanybots/onebot/blob/master/v11/specs/api/public.md#get_csrf_token-%E8%8E%B7%E5%8F%96-csrf-token
     * @return null|array|bool
     */
    public function getCsrfToken()
    {
        return $this->processAPI($this->connection, [
            'action' => $this->getActionName($this->prefix, __FUNCTION__),
        ], $this->callback);
    }

    /**
     * 获取 QQ 相关接口凭证
     * @see https://github.com/howmanybots/onebot/blob/master/v11/specs/api/public.md#get_credentials-%E8%8E%B7%E5%8F%96-qq-%E7%9B%B8%E5%85%B3%E6%8E%A5%E5%8F%A3%E5%87%AD%E8%AF%81
     * @return null|array|bool
     */
    public function getCredentials(string $domain = '')
    {
        return $this->processAPI($this->connection, [
            'action' => $this->getActionName($this->prefix, __FUNCTION__),
            'params' => [
                'domain' => $domain,
            ],
        ], $this->callback);
    }

    /**
     * 获取语音
     * @see https://github.com/howmanybots/onebot/blob/master/v11/specs/api/public.md#get_record-%E8%8E%B7%E5%8F%96%E8%AF%AD%E9%9F%B3
     * @param $file
     * @param $out_format
     * @return null|array|bool
     */
    public function getRecord($file, $out_format)
    {
        return $this->processAPI($this->connection, [
            'action' => $this->getActionName($this->prefix, __FUNCTION__),
            'params' => [
                'file' => $file,
                'out_format' => $out_format,
            ],
        ], $this->callback);
    }

    /**
     * 获取图片
     * @see https://github.com/howmanybots/onebot/blob/master/v11/specs/api/public.md#get_image-%E8%8E%B7%E5%8F%96%E5%9B%BE%E7%89%87
     * @param $file
     * @return null|array|bool
     */
    public function getImage($file)
    {
        return $this->processAPI($this->connection, [
            'action' => $this->getActionName($this->prefix, __FUNCTION__),
            'params' => [
                'file' => $file,
            ],
        ], $this->callback);
    }

    /**
     * 检查是否可以发送图片
     * @see https://github.com/howmanybots/onebot/blob/master/v11/specs/api/public.md#can_send_image-%E6%A3%80%E6%9F%A5%E6%98%AF%E5%90%A6%E5%8F%AF%E4%BB%A5%E5%8F%91%E9%80%81%E5%9B%BE%E7%89%87
     * @return null|array|bool
     */
    public function canSendImage()
    {
        return $this->processAPI($this->connection, [
            'action' => $this->getActionName($this->prefix, __FUNCTION__),
        ], $this->callback);
    }

    /**
     * 检查是否可以发送语音
     * @see https://github.com/howmanybots/onebot/blob/master/v11/specs/api/public.md#can_send_record-%E6%A3%80%E6%9F%A5%E6%98%AF%E5%90%A6%E5%8F%AF%E4%BB%A5%E5%8F%91%E9%80%81%E8%AF%AD%E9%9F%B3
     * @return null|array|bool
     */
    public function canSendRecord()
    {
        return $this->processAPI($this->connection, [
            'action' => $this->getActionName($this->prefix, __FUNCTION__),
        ], $this->callback);
    }

    /**
     * 获取运行状态
     * @see https://github.com/howmanybots/onebot/blob/master/v11/specs/api/public.md#get_status-%E8%8E%B7%E5%8F%96%E8%BF%90%E8%A1%8C%E7%8A%B6%E6%80%81
     * @return null|array|bool
     */
    public function getStatus()
    {
        return $this->processAPI($this->connection, [
            'action' => $this->getActionName($this->prefix, __FUNCTION__),
        ], $this->callback);
    }

    /**
     * 获取版本信息
     * @see https://github.com/howmanybots/onebot/blob/master/v11/specs/api/public.md#get_version_info-%E8%8E%B7%E5%8F%96%E7%89%88%E6%9C%AC%E4%BF%A1%E6%81%AF
     * @return null|array|bool
     */
    public function getVersionInfo()
    {
        return $this->processAPI($this->connection, [
            'action' => $this->getActionName($this->prefix, __FUNCTION__),
        ], $this->callback);
    }

    /**
     * 重启 OneBot 实现
     * @see https://github.com/howmanybots/onebot/blob/master/v11/specs/api/public.md#set_restart-%E9%87%8D%E5%90%AF-onebot-%E5%AE%9E%E7%8E%B0
     * @return null|array|bool
     */
    public function setRestart(int $delay = 0)
    {
        return $this->processAPI($this->connection, [
            'action' => $this->getActionName($this->prefix, __FUNCTION__),
            'params' => [
                'delay' => $delay,
            ],
        ], $this->callback);
    }

    /**
     * 清理缓存
     * @see https://github.com/howmanybots/onebot/blob/master/v11/specs/api/public.md#clean_cache-%E6%B8%85%E7%90%86%E7%BC%93%E5%AD%98
     * @return null|array|bool
     */
    public function cleanCache()
    {
        return $this->processAPI($this->connection, [
            'action' => $this->getActionName($this->prefix, __FUNCTION__),
        ], $this->callback);
    }

    /**
     * 获取内置支持的扩展API对象
     * 现支持 go-cqhttp 的扩展API
     * @throws ZMKnownException
     * @return mixed
     */
    public function getExtendedAPI(string $package_name = 'go-cqhttp')
    {
        $table = [
            'go-cqhttp' => GoCqhttpAPIV11::class,
        ];
        if (isset($table[$package_name])) {
            return new $table[$package_name]($this->connection, $this->callback, $this->prefix);
        }
        throw new ZMKnownException(zm_internal_errcode('E00071'), '无法找到对应的调用扩展类');
    }

    public function callExtendedAPI($action, $params = [])
    {
        return $this->processAPI($this->connection, [
            'action' => $action,
            'params' => $params,
        ], $this->callback);
    }
}
