<?php
/**
 * Created by PhpStorm.
 * User: jerry
 * Date: 2018/2/25
 * Time: 下午11:11
 */

namespace ZM\Store;

use Swoole\Atomic;
use Swoole\Database\PDOPool;
use swoole_atomic;
use ZM\Config\ZMConfig;

class ZMBuf
{
    //读写的缓存数据，需要在worker_num = 1下才能正常使用
    /** @var mixed[] ZMBuf的data */
    private static $cache = [];
    //Scheduler计划任务连接实例，只可以在单worker_num时使用
    static $scheduler = null; //This is stupid warning...

    //Swoole SQL连接池，多进程下每个进程一个连接池
    /** @var PDOPool */
    static $sql_pool = null;//保存sql连接池的类


    // swoole server操作对象，每个进程均分配
    /** @var \swoole_websocket_server $server */
    static $server;
    /** @var array Http请求uri路径根节点 */
    public static $req_mapping_node;
    /** @var mixed TimeNLP初始化后的对象，每个进程均可初始化 */
    public static $time_nlp;
    /** @var string[] $custom_connection_class */
    public static $custom_connection_class = [];//保存自定义的ws connection连接类型的

    // Atomic：可跨进程读写的原子计数，任何地方均可使用
    /** @var null|swoole_atomic */
    static $info_level = null;//保存log等级的原子计数
    public static $events = [];
    /** @var Atomic[] */
    public static $atomics;
    public static $req_mapping = [];
    public static $config = [];
    public static $context = [];
    public static $instance = [];
    public static $context_class = [];
    public static $server_events = [];

    static function get($name, $default = null) {
        return self::$cache[$name] ?? $default;
    }

    static function set($name, $value) {
        self::$cache[$name] = $value;
    }

    static function append($name, $value) {
        self::$cache[$name][] = $value;
    }

    static function appendKey($name, $key, $value) {
        self::$cache[$name][$key] = $value;
    }

    static function appendKeyInKey($name, $key, $value) {
        self::$cache[$name][$key][] = $value;
    }

    static function unsetCache($name) {
        unset(self::$cache[$name]);
    }

    static function unsetByValue($name, $vale) {
        $key = array_search($vale, self::$cache[$name]);
        array_splice(self::$cache[$name], $key, 1);
    }

    static function isset($name) {
        return isset(self::$cache[$name]);
    }

    static function array_key_exists($name, $key) {
        return isset(self::$cache[$name][$key]);
    }

    static function in_array($name, $val) {
        return in_array($val, self::$cache[$name]);
    }

    static function config($config_name) {
        return self::$config[$config_name] ?? null;
    }

    public static function resetCache() {
        self::$cache = [];
        self::$time_nlp = null;
        self::$instance = [];
    }

    /**
     * 初始化atomic计数器
     */
    public static function initAtomic() {
        foreach (ZMConfig::get("global", "init_atomics") as $k => $v) {
            self::$atomics[$k] = new Atomic($v);
        }
        self::$atomics["show_log_worker"] = new Atomic(999999);
    }
}